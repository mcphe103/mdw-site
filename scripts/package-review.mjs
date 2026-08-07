import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

function runGit(args) {
  const result = spawnSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
  });

  if (result.status !== 0) {
    console.error("Review package stopped: Git could not inspect the repository.");
    process.exit(1);
  }

  return result.stdout;
}

const repositoryRoot = runGit(["rev-parse", "--show-toplevel"]).trim();
const status = runGit(["status", "--porcelain", "--untracked-files=all"]);

if (status.trim()) {
  console.error("Review package stopped: the working tree is dirty. Commit or stash reviewed changes first.");
  process.exit(1);
}

const trackedFiles = runGit(["ls-files", "-z"])
  .split("\0")
  .filter(Boolean);

const exactProhibitedPaths = new Set([
  'eval "$(ssh-agent -s)"',
  'eval "$(ssh-agent -s)".pub',
]);
const prohibitedDirectories = [
  ".git/",
  ".pnpm-store/",
  ".turbo/",
  ".cache/",
  "node_modules/",
  ".next/",
  "coverage/",
  ".review-packages/",
  "out/",
  "build/",
  "dist/",
];

function isProhibited(file) {
  const normalized = file.replaceAll("\\", "/");
  const basename = normalized.split("/").at(-1) ?? normalized;
  const lowerBasename = basename.toLowerCase();

  if (exactProhibitedPaths.has(normalized)) return true;
  if (basename.startsWith(".env") && basename !== ".env.example") return true;
  if (/\.(pem|key|p12|pfx|zip)$/i.test(basename)) return true;
  if (/^(id_rsa|id_ed25519)(\.|$)/i.test(basename)) return true;
  if (lowerBasename === ".ds_store") return true;
  if (prohibitedDirectories.some((directory) => normalized.startsWith(directory))) return true;

  return false;
}

const prohibitedFiles = trackedFiles.filter(isProhibited);

if (prohibitedFiles.length) {
  console.error("Review package stopped: prohibited tracked paths were found:");
  for (const file of prohibitedFiles) console.error(`- ${file}`);
  process.exit(1);
}

const outputDirectory = resolve(repositoryRoot, ".review-packages");
const timestamp = new Date().toISOString().replaceAll(":", "-").replace(".000Z", "Z");
const outputPath = resolve(outputDirectory, `mdw-review-${timestamp}.zip`);

mkdirSync(outputDirectory, { recursive: true });

const archive = spawnSync(
  "git",
  ["archive", "--format=zip", `--output=${outputPath}`, "HEAD"],
  { cwd: repositoryRoot, encoding: "utf8" },
);

if (archive.status !== 0) {
  console.error("Review package stopped: Git could not create the archive.");
  process.exit(1);
}

console.log(`Review package created: ${outputPath}`);
