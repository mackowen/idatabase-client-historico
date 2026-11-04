# Revalidação do ambiente Termux ARM64 — REM-0004

Verificação somente de leitura em 2026-11-04. Nenhuma instalação, atualização, compilação, operação SQL ou alteração de configuração foi feita.

| Item | Evidência observada | Limite |
|---|---|---|
| Android/ABI | Android 13; `arm64-v8a`; kernel Android/Linux 5.4.274 `aarch64` | Confirma o ambiente, não suporte do produto. |
| Node/npm | Node `v26.4.0`; npm `11.21.1`; Node identifica `android/arm64` | Sem app/package para instalar ou executar. |
| Git/SSH | Git `2.56.0`; `ssh -T -o BatchMode=yes` autenticou como `mackowen`; exit 1 esperado por não haver shell interativo | Nenhuma chave ou segredo foi exibido. |
| Python | Python `3.14.6` | Disponível; dependências futuras precisam de versões de build compatíveis. |
| Toolchain | Clang `21.1.8`, target `aarch64-unknown-linux-android24`; Make `4.4.1`; CMake `4.4.4`; pkg-config `0.29.2` | Nenhum código compilado. GCC separado não foi comprovado; `gcc` historicamente resolve para Clang. |
| SQLite | CLI, biblioteca e pkg-config `3.54.1`; `sqlite3.h` presente | Não comprova versão/ABI do addon que o produto venha a usar. |
| PostgreSQL | `psql`/`pg_config` `18.6`; libpq encontrada; `pg_isready` reporta accepting connections no socket/endereço local | Nenhum SQL ou conexão de sessão feita. |
| Node headers | `node.h` e `node_api.h` presentes | Nenhum addon testado; N-API não garante ABI Bionic ou libs externas. |
| Compilação nativa | `node-gyp` e `ndk-build` ausentes; variáveis ANDROID_NDK_HOME/ROOT não definidas | Requisitos dependem do binding e do caminho suportado pelo pacote. |
| Ferramentas ausentes | Docker CLI ausente; `termux-info` excede 8 s conforme execuções anteriores | Docker e detalhes Termux não homologados. |

**Conclusão:** compatibilidade observada limita-se a ferramentas/runtime. Compatibilidade de instalação, build, addon nativo, persistência e execução do produto permanece não comprovada. Android/Bionic não é substituto de Linux ARM64/glibc. Nenhuma incompatibilidade de produto foi demonstrada porque não há produto executável para testar.
