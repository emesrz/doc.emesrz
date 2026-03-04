#!/bin/bash
# 安装最新 pnpm
corepack enable
corepack prepare pnpm@latest --activate

# 安装依赖
pnpm install

# 构建项目
pnpm run docs:build