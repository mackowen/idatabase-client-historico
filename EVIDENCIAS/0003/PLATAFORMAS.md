# Matriz de plataforma observada — Campanha 0003

| Plataforma | Intenção na v5.5 | Toolchain | Build | Testes | Homologação produção |
|---|---|---|---|---|---|
| Android/Termux ARM64 | Prioridade de desenvolvimento | Disponível (Android 13, `arm64-v8a`, Node/npm, Clang Android) | Comprovado nesta execução | 3 files/5 tests executados | NÃO; precisa homologação repetida em device definido. |
| Linux ARM64 glibc | Planejada/suporte a decidir | Não observada | Não | Não | NÃO |
| Linux x64 | Planejada/suporte a decidir | Não observada | Não | Não | NÃO |
| Windows x64 | Planejada/suporte a decidir | Não observada | Não | Não | NÃO |
| Docker | Opcional/decisão pendente; CLI ausente no Termux | Não disponível | Não | Não | NÃO |

Termux conclui nível toolchain, build e testes para a fundação mínima. Isso não aprova persistence, bindings de banco, background workers, browser E2E, instalador ou produção. Node-API/libc não foram exercitados porque não há addon nativo de produto.
