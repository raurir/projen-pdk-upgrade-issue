import { MonorepoTsProject } from "@aws/pdk/monorepo";
import {
  Language,
  ModelLanguage,
  TypeSafeApiProject,
} from "@aws/pdk/type-safe-api";
import { NodePackageManager } from "projen/lib/javascript";

const monorepo = new MonorepoTsProject({
  name: "@demo/monorepo",
  defaultReleaseBranch: "main",
  packageManager: NodePackageManager.PNPM,
  tsconfig: {
    compilerOptions: {
      lib: ["es2019", "dom"],
      skipLibCheck: true,
    },
  },
});

new TypeSafeApiProject({
  parent: monorepo,
  outdir: "packages/api",
  name: "@demo/api",
  model: {
    language: ModelLanguage.SMITHY,
    options: {
      smithy: {
        serviceName: {
          namespace: "com.test",
          serviceName: "TEestService",
        },
      },
    },
  },
  infrastructure: {
    language: Language.TYPESCRIPT,
  },
});

monorepo.synth();
