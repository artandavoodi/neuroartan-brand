#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-docs}"

if [ ! -d "$ROOT" ]; then
  echo "Duplicate asset check skipped: $ROOT does not exist"
  exit 0
fi

matches="$(
  find "$ROOT" -type f \( \
    -name "* [0-9].svg" -o \
    -name "* [0-9].png" -o \
    -name "* [0-9].jpg" -o \
    -name "* [0-9].jpeg" -o \
    -name "* [0-9].webp" -o \
    -name "* [0-9].ico" -o \
    -name "* copy.*" -o \
    -name "*-copy.*" -o \
    -name "* Copy.*" -o \
    -name "*-Copy.*" \
  \) -print | sort
)"

if [ -n "$matches" ]; then
  echo "Duplicate asset check failed:"
  echo "$matches"
  exit 1
fi

echo "Duplicate asset check passed"
