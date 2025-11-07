"use client"

import * as React from "react"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToastProps = React.ComponentProps<typeof Toast>

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type State = {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) return
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({ type: "REMOVE_TOAST", toastId })
  }, TOAST_REMOVE_DELAY)
  toastTimeouts.set(toastId, timeout)
}

const [state, dispatch] = (() => {
  const initialState: State = { toasts: [] }

  type Action =
    | { type: "ADD_TOAST"; toast: ToasterToast }
    | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> }
    | { type: "DISMISS_TOAST"; toastId?: string }
    | { type: "REMOVE_TOAST"; toastId?: string }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "ADD_TOAST":
        return { ...state, toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) }
      case "UPDATE_TOAST":
        return {
          ...state,
          toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
        }
      case "DISMISS_TOAST": {
        const { toastId } = action
        if (toastId) addToRemoveQueue(toastId)
        else state.toasts.forEach((t) => addToRemoveQueue(t.id))
        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toastId || toastId === undefined ? { ...t, open: false } : t
          ),
        }
      }
      case "REMOVE_TOAST":
        if (action.toastId === undefined)
          return { ...state, toasts: [] }
        return { ...state, toasts: state.toasts.filter((t) => t.id !== action.toastId) }
    }
  }

  const listeners: Array<(state: State) => void> = []
  let stateRef = initialState

  function dispatch(action: Action) {
    stateRef = reducer(stateRef, action)
    listeners.forEach((l) => l(stateRef))
  }

  function useStore() {
    const [localState, setLocalState] = React.useState(stateRef)
    React.useEffect(() => {
      listeners.push(setLocalState)
      return () => {
        const index = listeners.indexOf(setLocalState)
        if (index > -1) listeners.splice(index, 1)
      }
    }, [])
    return [localState, dispatch] as const
  }

  return [stateRef, dispatch, useStore] as const
})()

export function toast({ ...props }: Omit<ToasterToast, "id">) {
  const id = genId()
  const toast: ToasterToast = {
    ...props,
    id,
    open: true,
  }
  dispatch({ type: "ADD_TOAST", toast })
  return { id, dismiss: () => dispatch({ type: "DISMISS_TOAST", toastId: id }) }
}
