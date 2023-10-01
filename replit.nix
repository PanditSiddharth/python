{ pkgs }: {
    deps = [
        pkgs.python39Packages.pip
        pkgs.nano
        pkgs.vim
        pkgs.toybox
        pkgs.dotnet-sdk_5
        pkgs.nixos-rebuild
        pkgs.lsof
        pkgs.mono5
        pkgs.yarn
        pkgs.esbuild
        pkgs.nodejs
        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}