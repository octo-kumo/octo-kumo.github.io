---
created: 2024-07-18T08:33
updated: 2024-07-18T12:34
title: HackTheBox Notes
---

## Ports

| Port     | Service  | Methods                         | Function    | Command                                        |
| -------- | -------- | ------------------------------- | ----------- | ---------------------------------------------- |
| `23`     | `telnet` | Try `root`                      | Shell       | `telnet 127.0.0.1`                             |
| `20/21`  | `ftp`    | Try `anonymous`                 | File access | `ftp 127.0.0.1`                                |
| `445`    | `smb`    | Try every share                 | Shell       | `smbclient -L IP`<br>`smbclient \\\\IP\\Share` |
| `6379/?` | `redis`  | `select N` `keys *` `get [key]` | Database    | `redis-cli -h IP`                              |
|          |          |                                 |             |                                                |
