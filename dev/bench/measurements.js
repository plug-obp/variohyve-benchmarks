window.BENCHMARK_RUNS = [
  {
    "schema": 1,
    "date": "2026-10-07T12:03:15.862521+00:00",
    "jmh_sha256": "2f8bb604ec22db4ad6ac7200160e08ba5e877b79d86da30e4f12c0225da78e64",
    "native_gc": {
      "nativeGc": "tracing",
      "nativeHeapCapacity": "16384",
      "nativeGcThreshold": "0.75"
    },
    "cases": [
      {
        "name": "closureSend",
        "params": {},
        "runtimes": {
          "VarioHyve": {
            "mean": 11.55555428752109,
            "min": 11.247134524210763,
            "q1": 11.377229216651696,
            "median": 11.38401266788072,
            "q3": 11.400160055576436,
            "max": 12.369234973285842,
            "samples": [
              11.377229216651696,
              12.369234973285842,
              11.247134524210763,
              11.38401266788072,
              11.400160055576436
            ],
            "confidence99_9": [
              9.788267356282283,
              13.322841218759898
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 0.10263566468863633,
            "min": 0.10155859092055568,
            "q1": 0.10222436808268229,
            "median": 0.1025867556373545,
            "q3": 0.10335027251372467,
            "max": 0.10345833628886454,
            "samples": [
              0.10335027251372467,
              0.10222436808268229,
              0.10155859092055568,
              0.1025867556373545,
              0.10345833628886454
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 0.6166976847126256,
            "min": 0.6152344394089589,
            "q1": 0.6165196212614426,
            "median": 0.6167457657630997,
            "q3": 0.6167666794666693,
            "max": 0.6182219176629578,
            "samples": [
              0.6152344394089589,
              0.6167457657630997,
              0.6182219176629578,
              0.6167666794666693,
              0.6165196212614426
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "16",
          "nestingDepth": "1"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 157.19560794429367,
            "min": 149.03925845374647,
            "q1": 151.00691649080494,
            "median": 152.42510423651325,
            "q3": 162.58166520467836,
            "max": 170.92509533572527,
            "samples": [
              170.92509533572527,
              151.00691649080494,
              149.03925845374647,
              152.42510423651325,
              162.58166520467836
            ],
            "confidence99_9": [
              121.42956758401144,
              192.9616483045759
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "16",
          "nestingDepth": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 271.2468093327666,
            "min": 256.20107172131145,
            "q1": 256.30578379759777,
            "median": 261.3837168234065,
            "q3": 263.15541465336133,
            "max": 319.1880596681557,
            "samples": [
              319.1880596681557,
              263.15541465336133,
              256.30578379759777,
              261.3837168234065,
              256.20107172131145
            ],
            "confidence99_9": [
              167.37353548894498,
              375.1200831765882
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "256",
          "nestingDepth": "1"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1222.8404512630866,
            "min": 1179.2744917647058,
            "q1": 1205.1964638554216,
            "median": 1231.8706383763838,
            "q3": 1248.282482543641,
            "max": 1249.578179775281,
            "samples": [
              1205.1964638554216,
              1179.2744917647058,
              1231.8706383763838,
              1248.282482543641,
              1249.578179775281
            ],
            "confidence99_9": [
              1106.4730857928832,
              1339.20781673329
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "256",
          "nestingDepth": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1876.7122416462153,
            "min": 1799.0267396768402,
            "q1": 1833.6299689213895,
            "median": 1855.085662962963,
            "q3": 1944.1263941747573,
            "max": 1951.6924424951267,
            "samples": [
              1855.085662962963,
              1951.6924424951267,
              1833.6299689213895,
              1799.0267396768402,
              1944.1263941747573
            ],
            "confidence99_9": [
              1614.6595354777128,
              2138.7649478147177
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "16",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 186.56888704106473,
            "min": 181.24537266968326,
            "q1": 181.52922336956522,
            "median": 182.22594373634377,
            "q3": 184.32435433941404,
            "max": 203.51954109031732,
            "samples": [
              203.51954109031732,
              181.24537266968326,
              181.52922336956522,
              184.32435433941404,
              182.22594373634377
            ],
            "confidence99_9": [
              149.78758886962962,
              223.35018521249984
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 381.0515531131181,
            "min": 375.83873502994015,
            "q1": 376.60633358433734,
            "median": 378.4069935993976,
            "q3": 380.3370382575758,
            "max": 394.0686650943396,
            "samples": [
              378.4069935993976,
              394.0686650943396,
              376.60633358433734,
              380.3370382575758,
              375.83873502994015
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 761.3310827448263,
            "min": 757.7493590909091,
            "q1": 758.1453143939394,
            "median": 760.9498507575757,
            "q3": 763.7983643292683,
            "max": 766.012525152439,
            "samples": [
              763.7983643292683,
              758.1453143939394,
              757.7493590909091,
              760.9498507575757,
              766.012525152439
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "16",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 86.36482884325355,
            "min": 82.60075181338608,
            "q1": 82.67992036348616,
            "median": 83.13804014962594,
            "q3": 91.41474040920716,
            "max": 91.99069148056245,
            "samples": [
              91.99069148056245,
              82.67992036348616,
              82.60075181338608,
              83.13804014962594,
              91.41474040920716
            ],
            "confidence99_9": [
              67.56842720245774,
              105.16123048404936
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 25.537452436131915,
            "min": 25.29456214717742,
            "q1": 25.358366028225806,
            "median": 25.559249897875816,
            "q3": 25.56098973651961,
            "max": 25.914094370860926,
            "samples": [
              25.559249897875816,
              25.29456214717742,
              25.56098973651961,
              25.358366028225806,
              25.914094370860926
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 159.05334052118818,
            "min": 146.92734141355137,
            "q1": 155.231395884901,
            "median": 157.26197218750002,
            "q3": 161.664684439433,
            "max": 174.18130868055556,
            "samples": [
              174.18130868055556,
              146.92734141355137,
              155.231395884901,
              157.26197218750002,
              161.664684439433
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "256",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1201.810459997337,
            "min": 1162.7267468060395,
            "q1": 1184.4993822485208,
            "median": 1188.7039098457888,
            "q3": 1213.9894145454546,
            "max": 1259.1328465408806,
            "samples": [
              1259.1328465408806,
              1184.4993822485208,
              1188.7039098457888,
              1162.7267468060395,
              1213.9894145454546
            ],
            "confidence99_9": [
              1059.894840364329,
              1343.7260796303449
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 451.3547063629202,
            "min": 447.09416026785715,
            "q1": 448.7906267857143,
            "median": 449.2294169642857,
            "q3": 449.3984330357143,
            "max": 462.2608947610294,
            "samples": [
              462.2608947610294,
              447.09416026785715,
              449.3984330357143,
              449.2294169642857,
              448.7906267857143
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 2021.4407028451087,
            "min": 2003.293132,
            "q1": 2015.6346019999999,
            "median": 2016.6435322580644,
            "q3": 2034.8996646341463,
            "max": 2036.7325833333332,
            "samples": [
              2034.8996646341463,
              2015.6346019999999,
              2003.293132,
              2016.6435322580644,
              2036.7325833333332
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "256",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 822.1317033810052,
            "min": 794.341996031746,
            "q1": 809.8310129554656,
            "median": 817.8351192810458,
            "q3": 843.7614654300169,
            "max": 844.8889232067511,
            "samples": [
              809.8310129554656,
              843.7614654300169,
              844.8889232067511,
              794.341996031746,
              817.8351192810458
            ],
            "confidence99_9": [
              737.5977217877962,
              906.6656849742142
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 92.88406384328518,
            "min": 91.94163299632353,
            "q1": 92.56463553994084,
            "median": 92.72018611316568,
            "q3": 92.94843666789941,
            "max": 94.24542789909638,
            "samples": [
              91.94163299632353,
              92.72018611316568,
              92.94843666789941,
              94.24542789909638,
              92.56463553994084
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1408.7089105444268,
            "min": 1386.569046961326,
            "q1": 1407.2652303370787,
            "median": 1413.2183827683616,
            "q3": 1417.9451949152542,
            "max": 1418.546697740113,
            "samples": [
              1386.569046961326,
              1417.9451949152542,
              1407.2652303370787,
              1413.2183827683616,
              1418.546697740113
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "literal",
        "params": {},
        "runtimes": {
          "VarioHyve": {
            "mean": 10.848472463474852,
            "min": 10.682166431759455,
            "q1": 10.743969064524098,
            "median": 10.74814487139592,
            "q3": 10.806798850326317,
            "max": 11.261283099368464,
            "samples": [
              10.682166431759455,
              11.261283099368464,
              10.74814487139592,
              10.743969064524098,
              10.806798850326317
            ],
            "confidence99_9": [
              9.943789109995997,
              11.753155816953708
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 0.037141699869009163,
            "min": 0.0366799336213332,
            "q1": 0.03673604055551383,
            "median": 0.036963154499347395,
            "q3": 0.037029539621793305,
            "max": 0.03829983104705811,
            "samples": [
              0.036963154499347395,
              0.0366799336213332,
              0.03829983104705811,
              0.03673604055551383,
              0.037029539621793305
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 0.7944441591266052,
            "min": 0.43212454954335383,
            "q1": 0.43655709184919084,
            "median": 0.43781032111055107,
            "q3": 0.5408620065334624,
            "max": 2.1248668265964676,
            "samples": [
              2.1248668265964676,
              0.5408620065334624,
              0.43655709184919084,
              0.43212454954335383,
              0.43781032111055107
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "methodSend",
        "params": {},
        "runtimes": {
          "VarioHyve": {
            "mean": 13.892016018445327,
            "min": 13.801590029074974,
            "q1": 13.804544775707384,
            "median": 13.867346996730758,
            "q3": 13.96325572758876,
            "max": 14.023342563124764,
            "samples": [
              13.867346996730758,
              13.96325572758876,
              14.023342563124764,
              13.801590029074974,
              13.804544775707384
            ],
            "confidence99_9": [
              13.512974953909358,
              14.271057082981295
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 3.492464948948924,
            "min": 3.457531212175396,
            "q1": 3.4744636247783687,
            "median": 3.4845096409574468,
            "q3": 3.5196533097740557,
            "max": 3.5261669570593526,
            "samples": [
              3.5261669570593526,
              3.5196533097740557,
              3.457531212175396,
              3.4845096409574468,
              3.4744636247783687
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 138.56235914835932,
            "min": 75.16492886904763,
            "q1": 105.30648091442953,
            "median": 130.68576614583333,
            "q3": 182.80050054824562,
            "max": 198.8541192642405,
            "samples": [
              198.8541192642405,
              182.80050054824562,
              75.16492886904763,
              105.30648091442953,
              130.68576614583333
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "mutual",
        "params": {
          "depth": "16"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 61.840625234605476,
            "min": 60.17102186974285,
            "q1": 60.783668063654034,
            "median": 61.10882275310075,
            "q3": 61.159337199365154,
            "max": 65.98027628716461,
            "samples": [
              65.98027628716461,
              61.159337199365154,
              60.783668063654034,
              60.17102186974285,
              61.10882275310075
            ],
            "confidence99_9": [
              52.80162656524142,
              70.87962390396953
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 9.150768203189225,
            "min": 9.106622621889468,
            "q1": 9.132335955753504,
            "median": 9.14837772889895,
            "q3": 9.181580726124416,
            "max": 9.18492398327979,
            "samples": [
              9.18492398327979,
              9.106622621889468,
              9.181580726124416,
              9.132335955753504,
              9.14837772889895
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 135.39982469727778,
            "min": 121.62234786821705,
            "q1": 132.5967360963983,
            "median": 138.12426027960527,
            "q3": 141.63943961148647,
            "max": 143.0163396306818,
            "samples": [
              121.62234786821705,
              141.63943961148647,
              132.5967360963983,
              138.12426027960527,
              143.0163396306818
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "mutual",
        "params": {
          "depth": "256"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 740.8879663546862,
            "min": 710.6180809659091,
            "q1": 722.6580007220217,
            "median": 743.3141849925706,
            "q3": 761.5348097412481,
            "max": 766.3147553516819,
            "samples": [
              710.6180809659091,
              766.3147553516819,
              743.3141849925706,
              722.6580007220217,
              761.5348097412481
            ],
            "confidence99_9": [
              648.0064380485471,
              833.7694946608253
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 77.29348678639464,
            "min": 76.88406112132353,
            "q1": 77.03227152267156,
            "median": 77.2274886642157,
            "q3": 77.61090501237624,
            "max": 77.71270761138614,
            "samples": [
              77.61090501237624,
              77.03227152267156,
              76.88406112132353,
              77.71270761138614,
              77.2274886642157
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1400.514730081583,
            "min": 1383.7714129834255,
            "q1": 1387.7471781767956,
            "median": 1402.3684539106146,
            "q3": 1405.4341053370788,
            "max": 1423.2525,
            "samples": [
              1383.7714129834255,
              1387.7471781767956,
              1402.3684539106146,
              1423.2525,
              1405.4341053370788
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "16",
          "partnerCount": "3"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 98.221264510617,
            "min": 91.21259690627843,
            "q1": 92.03265749770009,
            "median": 92.32835949880229,
            "q3": 94.6065472429774,
            "max": 120.9261614073268,
            "samples": [
              120.9261614073268,
              92.03265749770009,
              94.6065472429774,
              91.21259690627843,
              92.32835949880229
            ],
            "confidence99_9": [
              49.10762079954755,
              147.33490822168648
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 13.957190236710042,
            "min": 13.88257691988032,
            "q1": 13.89390582058954,
            "median": 13.992794349888392,
            "q3": 13.993983510044643,
            "max": 14.022690583147321,
            "samples": [
              13.89390582058954,
              14.022690583147321,
              13.88257691988032,
              13.993983510044643,
              13.992794349888392
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 202.3713167393072,
            "min": 177.33725423728814,
            "q1": 202.57845745967742,
            "median": 204.32348835784313,
            "q3": 213.08417580782313,
            "max": 214.5332078339041,
            "samples": [
              213.08417580782313,
              214.5332078339041,
              204.32348835784313,
              177.33725423728814,
              202.57845745967742
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "16",
          "partnerCount": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 124.04554238214193,
            "min": 115.16226230450782,
            "q1": 115.53291532863578,
            "median": 116.2037793007318,
            "q3": 116.38551239092496,
            "max": 156.9432425859093,
            "samples": [
              156.9432425859093,
              116.2037793007318,
              116.38551239092496,
              115.53291532863578,
              115.16226230450782
            ],
            "confidence99_9": [
              53.20506197686879,
              194.88602278741507
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 17.218192160785154,
            "min": 17.16098178796601,
            "q1": 17.169247087445175,
            "median": 17.21547539747807,
            "q3": 17.239640899122804,
            "max": 17.305615631913714,
            "samples": [
              17.239640899122804,
              17.16098178796601,
              17.169247087445175,
              17.305615631913714,
              17.21547539747807
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 242.74671774938582,
            "min": 216.1226993534483,
            "q1": 236.2421010338346,
            "median": 238.6977071496212,
            "q3": 252.9343341733871,
            "max": 269.7367470366379,
            "samples": [
              216.1226993534483,
              236.2421010338346,
              238.6977071496212,
              252.9343341733871,
              269.7367470366379
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "256",
          "partnerCount": "3"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 960.3573178618688,
            "min": 888.0286805678793,
            "q1": 914.4890045703839,
            "median": 959.5459532442748,
            "q3": 1000.2650578842315,
            "max": 1039.4578930425753,
            "samples": [
              1000.2650578842315,
              959.5459532442748,
              914.4890045703839,
              1039.4578930425753,
              888.0286805678793
            ],
            "confidence99_9": [
              723.1007666927451,
              1197.6138690309924
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 80.96336665870633,
            "min": 80.16518413461539,
            "q1": 80.20131154336735,
            "median": 80.37711121794872,
            "q3": 81.03713544365284,
            "max": 83.03609095394737,
            "samples": [
              83.03609095394737,
              80.20131154336735,
              81.03713544365284,
              80.16518413461539,
              80.37711121794872
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1329.8772896694882,
            "min": 1318.568227631579,
            "q1": 1321.9759144736843,
            "median": 1331.3952353723405,
            "q3": 1335.4437473404257,
            "max": 1342.0033235294118,
            "samples": [
              1318.568227631579,
              1342.0033235294118,
              1331.3952353723405,
              1321.9759144736843,
              1335.4437473404257
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "256",
          "partnerCount": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 955.3000469837314,
            "min": 917.6872504587157,
            "q1": 939.4469126760563,
            "median": 946.4261050141911,
            "q3": 978.08124609375,
            "max": 994.8587206759444,
            "samples": [
              994.8587206759444,
              917.6872504587157,
              946.4261050141911,
              978.08124609375,
              939.4469126760563
            ],
            "confidence99_9": [
              836.168459557753,
              1074.4316344097099
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 83.51111975027378,
            "min": 83.28162915558511,
            "q1": 83.4624019281915,
            "median": 83.49525241023936,
            "q3": 83.55790625,
            "max": 83.75840900735294,
            "samples": [
              83.4624019281915,
              83.55790625,
              83.28162915558511,
              83.75840900735294,
              83.49525241023936
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1398.9160916821431,
            "min": 1375.7089587912087,
            "q1": 1380.4534725274725,
            "median": 1385.5240842541439,
            "q3": 1405.2011278089888,
            "max": 1447.6928150289016,
            "samples": [
              1405.2011278089888,
              1385.5240842541439,
              1375.7089587912087,
              1447.6928150289016,
              1380.4534725274725
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "simple",
        "params": {
          "depth": "16"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 60.21226421605307,
            "min": 60.006785084298315,
            "q1": 60.078334154252765,
            "median": 60.164266414141416,
            "q3": 60.382792104310035,
            "max": 60.42914332326284,
            "samples": [
              60.078334154252765,
              60.42914332326284,
              60.164266414141416,
              60.382792104310035,
              60.006785084298315
            ],
            "confidence99_9": [
              59.49553991995609,
              60.928988512150056
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 9.02342595134679,
            "min": 8.896027423650569,
            "q1": 8.969439981723049,
            "median": 8.973348480504587,
            "q3": 8.99446165424312,
            "max": 9.283852216612619,
            "samples": [
              9.283852216612619,
              8.973348480504587,
              8.896027423650569,
              8.99446165424312,
              8.969439981723049
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 133.9348675107386,
            "min": 123.1795188238189,
            "q1": 124.54776612103174,
            "median": 128.60191278176228,
            "q3": 146.52743105971896,
            "max": 146.81770876736113,
            "samples": [
              146.81770876736113,
              146.52743105971896,
              124.54776612103174,
              123.1795188238189,
              128.60191278176228
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "simple",
        "params": {
          "depth": "256"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 717.9054352052352,
            "min": 702.2192259649123,
            "q1": 707.3551322489392,
            "median": 716.9115838108883,
            "q3": 722.9327384393064,
            "max": 740.1084955621302,
            "samples": [
              716.9115838108883,
              740.1084955621302,
              707.3551322489392,
              722.9327384393064,
              702.2192259649123
            ],
            "confidence99_9": [
              660.9014845210651,
              774.9093858894054
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 77.39792965490238,
            "min": 75.59138807091347,
            "q1": 76.74686305147058,
            "median": 76.89957705269609,
            "q3": 78.23095078124999,
            "max": 79.52086931818182,
            "samples": [
              79.52086931818182,
              76.89957705269609,
              76.74686305147058,
              78.23095078124999,
              75.59138807091347
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1394.44964609083,
            "min": 1379.5451909340659,
            "q1": 1389.6123347222224,
            "median": 1390.120134722222,
            "q3": 1404.6352765363129,
            "max": 1408.335293539326,
            "samples": [
              1390.120134722222,
              1404.6352765363129,
              1389.6123347222224,
              1379.5451909340659,
              1408.335293539326
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "16",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1295.1705638590563,
            "min": 1257.217067839196,
            "q1": 1286.4214820051413,
            "median": 1289.8503414948455,
            "q3": 1314.4801467889909,
            "max": 1327.8837811671087,
            "samples": [
              1314.4801467889909,
              1289.8503414948455,
              1257.217067839196,
              1286.4214820051413,
              1327.8837811671087
            ],
            "confidence99_9": [
              1189.9215810756343,
              1400.4195466424783
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 500.0941011857893,
            "min": 488.52313818359374,
            "q1": 489.9647373046875,
            "median": 495.08967076771654,
            "q3": 509.99278353658536,
            "max": 516.9001761363636,
            "samples": [
              488.52313818359374,
              489.9647373046875,
              509.99278353658536,
              516.9001761363636,
              495.08967076771654
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 2248.7309966537964,
            "min": 2236.2705223214284,
            "q1": 2238.938464285714,
            "median": 2242.957870535714,
            "q3": 2256.2643513513513,
            "max": 2269.223774774775,
            "samples": [
              2269.223774774775,
              2238.938464285714,
              2256.2643513513513,
              2236.2705223214284,
              2242.957870535714
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "16",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 207.4542677020348,
            "min": 200.54518099819603,
            "q1": 201.16503438568267,
            "median": 202.45903885853068,
            "q3": 202.61946445209642,
            "max": 230.48261981566822,
            "samples": [
              230.48261981566822,
              202.61946445209642,
              201.16503438568267,
              200.54518099819603,
              202.45903885853068
            ],
            "confidence99_9": [
              157.77041878377443,
              257.1381166202952
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 36.13881832557593,
            "min": 35.785638671875,
            "q1": 35.94932988102064,
            "median": 36.05565460149082,
            "q3": 36.304248336226856,
            "max": 36.59922013726636,
            "samples": [
              35.785638671875,
              36.05565460149082,
              36.304248336226856,
              35.94932988102064,
              36.59922013726636
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 344.225387880506,
            "min": 339.0350307432432,
            "q1": 340.8533172554348,
            "median": 346.04743819060775,
            "q3": 346.6712341160221,
            "max": 348.5199190972222,
            "samples": [
              339.0350307432432,
              340.8533172554348,
              346.6712341160221,
              346.04743819060775,
              348.5199190972222
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "256",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 97882.02967,
            "min": 85197.11091666667,
            "q1": 87886.19333333333,
            "median": 100322.3447,
            "q3": 103611.8312,
            "max": 112392.6682,
            "samples": [
              103611.8312,
              112392.6682,
              87886.19333333333,
              85197.11091666667,
              100322.3447
            ],
            "confidence99_9": [
              54394.96434836453,
              141369.09499163547
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 2600.069981993908,
            "min": 2560.159744897959,
            "q1": 2581.9653015463914,
            "median": 2592.1499663212435,
            "q3": 2613.906515625,
            "max": 2652.1683815789474,
            "samples": [
              2592.1499663212435,
              2613.906515625,
              2652.1683815789474,
              2581.9653015463914,
              2560.159744897959
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 27247.49807982456,
            "min": 26843.807421052632,
            "q1": 26903.461342105264,
            "median": 27002.279815789472,
            "q3": 27029.199736842107,
            "max": 28458.74208333333,
            "samples": [
              26903.461342105264,
              27029.199736842107,
              26843.807421052632,
              27002.279815789472,
              28458.74208333333
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "256",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 4675.2607812820115,
            "min": 4363.673069565218,
            "q1": 4369.563746724891,
            "median": 4403.141342105263,
            "q3": 5051.980105527638,
            "max": 5187.945642487047,
            "samples": [
              5051.980105527638,
              5187.945642487047,
              4403.141342105263,
              4369.563746724891,
              4363.673069565218
            ],
            "confidence99_9": [
              3100.081723213431,
              6250.439839350593
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 338.3536634073648,
            "min": 335.8383118315508,
            "q1": 338.09614864864864,
            "median": 338.12742297297297,
            "q3": 338.3419706081081,
            "max": 341.36446297554346,
            "samples": [
              338.09614864864864,
              341.36446297554346,
              338.3419706081081,
              338.12742297297297,
              335.8383118315508
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 4283.113008221825,
            "min": 4248.723805084745,
            "q1": 4253.771826271187,
            "median": 4260.500474576271,
            "q3": 4261.994347457627,
            "max": 4390.574587719298,
            "samples": [
              4248.723805084745,
              4261.994347457627,
              4390.574587719298,
              4260.500474576271,
              4253.771826271187
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      }
    ],
    "id": "37617153197-1",
    "branch": "object-literal",
    "commit": {
      "id": "1f5f396dc969301b92396548e7808f686651fb94",
      "url": "https://github.com/plug-obp/variohyve/commit/1f5f396dc969301b92396548e7808f686651fb94",
      "message": "Unify benchmark dashboard and retain runtime sample distributions"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37617153197/attempts/1"
  },
  {
    "schema": 1,
    "date": "2026-10-07T13:27:56.459664+00:00",
    "jmh_sha256": "a021083d44a243a7b53c51db8ad94bbff46b96c3c7a0a77c150196b7588f3f0e",
    "native_gc": {
      "nativeGc": "tracing",
      "nativeHeapCapacity": "16384",
      "nativeGcThreshold": "0.75"
    },
    "cases": [
      {
        "name": "closureSend",
        "params": {},
        "runtimes": {
          "VarioHyve": {
            "mean": 21.693437675456344,
            "min": 21.412184756814536,
            "q1": 21.589741321992918,
            "median": 21.625856515816558,
            "q3": 21.896224374972636,
            "max": 21.943181407685056,
            "samples": [
              21.412184756814536,
              21.589741321992918,
              21.625856515816558,
              21.896224374972636,
              21.943181407685056
            ],
            "confidence99_9": [
              20.83690149164595,
              22.54997385926674
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 0.13736119499284147,
            "min": 0.13459557396068908,
            "q1": 0.13519040727193377,
            "median": 0.13732789080483573,
            "q3": 0.13792555236816406,
            "max": 0.1417665505585847,
            "samples": [
              0.13519040727193377,
              0.13459557396068908,
              0.13792555236816406,
              0.13732789080483573,
              0.1417665505585847
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 0.9096731230148841,
            "min": 0.8947852943587477,
            "q1": 0.9024984041101792,
            "median": 0.9119917839391908,
            "q3": 0.9137596790826144,
            "max": 0.9253304535836885,
            "samples": [
              0.9253304535836885,
              0.9137596790826144,
              0.9119917839391908,
              0.9024984041101792,
              0.8947852943587477
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "16",
          "nestingDepth": "1"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 324.7291743860957,
            "min": 238.8806482808023,
            "q1": 245.90204613496934,
            "median": 308.0435966748768,
            "q3": 331.36473430270985,
            "max": 499.4548465371201,
            "samples": [
              499.4548465371201,
              331.36473430270985,
              308.0435966748768,
              245.90204613496934,
              238.8806482808023
            ],
            "confidence99_9": [
              -81.12205221898745,
              730.5804009911787
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "16",
          "nestingDepth": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 595.4155756094599,
            "min": 451.4823962093863,
            "q1": 515.2295370751802,
            "median": 518.4995233160622,
            "q3": 555.9351880199667,
            "max": 935.931233426704,
            "samples": [
              935.931233426704,
              555.9351880199667,
              515.2295370751802,
              451.4823962093863,
              518.4995233160622
            ],
            "confidence99_9": [
              -151.6794443897047,
              1342.5105956086245
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "256",
          "nestingDepth": "1"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 2256.448684148297,
            "min": 2006.5358043912177,
            "q1": 2083.3565405405407,
            "median": 2102.549997903564,
            "q3": 2107.3893844537815,
            "max": 2982.411693452381,
            "samples": [
              2982.411693452381,
              2083.3565405405407,
              2107.3893844537815,
              2102.549997903564,
              2006.5358043912177
            ],
            "confidence99_9": [
              685.991151607233,
              3826.9062166893614
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "families",
        "params": {
          "depth": "256",
          "nestingDepth": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 3459.445412314805,
            "min": 3268.9024820846907,
            "q1": 3272.5269185667753,
            "median": 3290.638144736842,
            "q3": 3329.1597641196013,
            "max": 4135.999752066115,
            "samples": [
              4135.999752066115,
              3290.638144736842,
              3272.5269185667753,
              3329.1597641196013,
              3268.9024820846907
            ],
            "confidence99_9": [
              2000.207391503311,
              4918.683433126298
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "16",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 387.5195649259441,
            "min": 296.45315407407406,
            "q1": 303.1823518181818,
            "median": 351.93356771016533,
            "q3": 377.1698587570622,
            "max": 608.8588922702373,
            "samples": [
              608.8588922702373,
              377.1698587570622,
              351.93356771016533,
              303.1823518181818,
              296.45315407407406
            ],
            "confidence99_9": [
              -106.24363581650636,
              881.2827656683946
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 603.8127101850695,
            "min": 591.776876768868,
            "q1": 595.866619047619,
            "median": 601.8087866586538,
            "q3": 609.1559120145631,
            "max": 620.4553564356435,
            "samples": [
              609.1559120145631,
              620.4553564356435,
              601.8087866586538,
              595.866619047619,
              591.776876768868
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1145.7490572789825,
            "min": 1137.7984147727273,
            "q1": 1143.042134090909,
            "median": 1146.217734090909,
            "q3": 1149.5423451834863,
            "max": 1152.1446582568808,
            "samples": [
              1152.1446582568808,
              1137.7984147727273,
              1143.042134090909,
              1149.5423451834863,
              1146.217734090909
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "16",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 191.8383546288138,
            "min": 136.8073755124351,
            "q1": 137.9393533305751,
            "median": 153.190867482785,
            "q3": 234.7131569957885,
            "max": 296.5410198224852,
            "samples": [
              296.5410198224852,
              234.7131569957885,
              153.190867482785,
              136.8073755124351,
              137.9393533305751
            ],
            "confidence99_9": [
              -81.9911398965996,
              465.66784915422716
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 39.09784906119615,
            "min": 38.35879963235294,
            "q1": 38.48152094822304,
            "median": 39.16964390625,
            "q3": 39.42367658605528,
            "max": 40.05560423309949,
            "samples": [
              39.16964390625,
              39.42367658605528,
              40.05560423309949,
              38.48152094822304,
              38.35879963235294
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 214.92410870003133,
            "min": 206.19673314144737,
            "q1": 210.46076761744965,
            "median": 215.6070702586207,
            "q3": 218.03613498263888,
            "max": 224.3198375,
            "samples": [
              206.19673314144737,
              210.46076761744965,
              215.6070702586207,
              218.03613498263888,
              224.3198375
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "256",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 2033.6445004353347,
            "min": 1904.537602661597,
            "q1": 1961.41246875,
            "median": 1978.8980355731226,
            "q3": 1987.5681765873017,
            "max": 2335.8062186046513,
            "samples": [
              2335.8062186046513,
              1987.5681765873017,
              1961.41246875,
              1978.8980355731226,
              1904.537602661597
            ],
            "confidence99_9": [
              1371.4122050799863,
              2695.876795790683
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 701.5543212181177,
            "min": 697.5656291666667,
            "q1": 701.3776361731843,
            "median": 702.466596368715,
            "q3": 703.1136783707865,
            "max": 703.2480660112359,
            "samples": [
              703.2480660112359,
              697.5656291666667,
              702.466596368715,
              703.1136783707865,
              701.3776361731843
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 2949.636651786466,
            "min": 2906.4646184971098,
            "q1": 2934.004216374269,
            "median": 2943.0679,
            "q3": 2951.7473764705883,
            "max": 3012.8991475903617,
            "samples": [
              3012.8991475903617,
              2934.004216374269,
              2951.7473764705883,
              2943.0679,
              2906.4646184971098
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "inherited",
        "params": {
          "depth": "256",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1478.4806570081573,
            "min": 1299.2790766233766,
            "q1": 1380.3540137931034,
            "median": 1386.3406952908588,
            "q3": 1509.6633559577676,
            "max": 1816.7661433756805,
            "samples": [
              1816.7661433756805,
              1509.6633559577676,
              1386.3406952908588,
              1299.2790766233766,
              1380.3540137931034
            ],
            "confidence99_9": [
              694.892953103326,
              2262.0683609129887
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 139.00685660338004,
            "min": 136.92507201086957,
            "q1": 137.2511914747807,
            "median": 140.10820493861607,
            "q3": 140.37322042410713,
            "max": 140.3765941685268,
            "samples": [
              137.2511914747807,
              136.92507201086957,
              140.10820493861607,
              140.3765941685268,
              140.37322042410713
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1707.34820485015,
            "min": 1700.5334847972972,
            "q1": 1703.5138129251702,
            "median": 1704.8684268707484,
            "q3": 1712.9725650684932,
            "max": 1714.8527345890411,
            "samples": [
              1703.5138129251702,
              1700.5334847972972,
              1704.8684268707484,
              1714.8527345890411,
              1712.9725650684932
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "literal",
        "params": {},
        "runtimes": {
          "VarioHyve": {
            "mean": 20.558724261493495,
            "min": 20.063138663460574,
            "q1": 20.228154977900665,
            "median": 20.273019659505472,
            "q3": 20.981337324637742,
            "max": 21.247970681963032,
            "samples": [
              20.273019659505472,
              20.981337324637742,
              21.247970681963032,
              20.063138663460574,
              20.228154977900665
            ],
            "confidence99_9": [
              18.548471741875094,
              22.568976781111896
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 0.0562423798890419,
            "min": 0.05519607966580837,
            "q1": 0.05568416131061056,
            "median": 0.05627944912629969,
            "q3": 0.05645268165363985,
            "max": 0.057599527688851036,
            "samples": [
              0.057599527688851036,
              0.05627944912629969,
              0.05568416131061056,
              0.05519607966580837,
              0.05645268165363985
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 2.2092281766866435,
            "min": 0.6911803081965042,
            "q1": 0.7495476096616973,
            "median": 1.4241165288880813,
            "q3": 3.345371939881207,
            "max": 4.835924496805727,
            "samples": [
              4.835924496805727,
              3.345371939881207,
              1.4241165288880813,
              0.7495476096616973,
              0.6911803081965042
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "methodSend",
        "params": {},
        "runtimes": {
          "VarioHyve": {
            "mean": 25.74400836946076,
            "min": 25.65594124887806,
            "q1": 25.699521102519974,
            "median": 25.727170606239874,
            "q3": 25.76003416780302,
            "max": 25.87737472186287,
            "samples": [
              25.727170606239874,
              25.87737472186287,
              25.65594124887806,
              25.699521102519974,
              25.76003416780302
            ],
            "confidence99_9": [
              25.42148472835149,
              26.066532010570032
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 5.161633816764121,
            "min": 5.063695585735104,
            "q1": 5.149891108141447,
            "median": 5.180093698330026,
            "q3": 5.194982073844747,
            "max": 5.219506617769282,
            "samples": [
              5.219506617769282,
              5.149891108141447,
              5.194982073844747,
              5.063695585735104,
              5.180093698330026
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 314.64561543614445,
            "min": 262.88468146008404,
            "q1": 289.5907572337963,
            "median": 328.98528157894737,
            "q3": 329.3821694078947,
            "max": 362.3851875,
            "samples": [
              329.3821694078947,
              262.88468146008404,
              289.5907572337963,
              328.98528157894737,
              362.3851875
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "mutual",
        "params": {
          "depth": "16"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 122.29203744262823,
            "min": 96.99618762088974,
            "q1": 97.15417373992425,
            "median": 100.7393088931413,
            "q3": 138.41143770718233,
            "max": 178.15907925200355,
            "samples": [
              178.15907925200355,
              138.41143770718233,
              100.7393088931413,
              96.99618762088974,
              97.15417373992425
            ],
            "confidence99_9": [
              -15.436105015941266,
              260.0201799011977
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 14.336628632108066,
            "min": 14.288538634808393,
            "q1": 14.322507712705292,
            "median": 14.327974053375913,
            "q3": 14.363955465877758,
            "max": 14.380167293772978,
            "samples": [
              14.380167293772978,
              14.327974053375913,
              14.322507712705292,
              14.363955465877758,
              14.288538634808393
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 184.61513077660754,
            "min": 174.26383854166664,
            "q1": 181.0250227601156,
            "median": 183.65447368421053,
            "q3": 189.64894564393938,
            "max": 194.48337325310558,
            "samples": [
              183.65447368421053,
              181.0250227601156,
              189.64894564393938,
              194.48337325310558,
              174.26383854166664
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "mutual",
        "params": {
          "depth": "256"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1296.668251930175,
            "min": 1188.9688956109135,
            "q1": 1238.2537685643565,
            "median": 1282.6566692307692,
            "q3": 1368.1267677595629,
            "max": 1405.3351584852735,
            "samples": [
              1238.2537685643565,
              1282.6566692307692,
              1188.9688956109135,
              1368.1267677595629,
              1405.3351584852735
            ],
            "confidence99_9": [
              951.5973572582957,
              1641.7391466020545
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 117.48323703068175,
            "min": 116.38836296296296,
            "q1": 117.10322679570895,
            "median": 117.57420523966165,
            "q3": 118.05694854323309,
            "max": 118.29344161184211,
            "samples": [
              117.57420523966165,
              118.05694854323309,
              118.29344161184211,
              117.10322679570895,
              116.38836296296296
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1731.569854466625,
            "min": 1718.7757397260275,
            "q1": 1721.3362808219179,
            "median": 1724.0437517123287,
            "q3": 1730.8284965517241,
            "max": 1762.8650035211267,
            "samples": [
              1724.0437517123287,
              1721.3362808219179,
              1718.7757397260275,
              1762.8650035211267,
              1730.8284965517241
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "16",
          "partnerCount": "3"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 209.770837662028,
            "min": 147.93358829614306,
            "q1": 148.89458728272174,
            "median": 193.82581142303968,
            "q3": 247.9979972772277,
            "max": 310.20220403100774,
            "samples": [
              310.20220403100774,
              247.9979972772277,
              193.82581142303968,
              147.93358829614306,
              148.89458728272174
            ],
            "confidence99_9": [
              -57.923578459406656,
              477.46525378346263
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 21.62224699669201,
            "min": 21.329049656080162,
            "q1": 21.481257426167584,
            "median": 21.587720917754122,
            "q3": 21.731254253472223,
            "max": 21.981952729985956,
            "samples": [
              21.329049656080162,
              21.731254253472223,
              21.981952729985956,
              21.481257426167584,
              21.587720917754122
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 247.06525902213212,
            "min": 222.8444100177305,
            "q1": 226.91175951086956,
            "median": 234.6490317164179,
            "q3": 263.9167549894958,
            "max": 287.0043388761468,
            "samples": [
              263.9167549894958,
              287.0043388761468,
              234.6490317164179,
              222.8444100177305,
              226.91175951086956
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "16",
          "partnerCount": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 253.04445337564772,
            "min": 186.45241519270155,
            "q1": 191.83833084004604,
            "median": 221.52457983193278,
            "q3": 279.3439988839286,
            "max": 386.0629421296296,
            "samples": [
              386.0629421296296,
              279.3439988839286,
              221.52457983193278,
              186.45241519270155,
              191.83833084004604
            ],
            "confidence99_9": [
              -66.58088875658223,
              572.6697955078777
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 26.895871601209016,
            "min": 26.10529606770833,
            "q1": 26.534164986275336,
            "median": 26.629781887755104,
            "q3": 27.00602640086207,
            "max": 28.204088663444242,
            "samples": [
              26.534164986275336,
              28.204088663444242,
              26.629781887755104,
              27.00602640086207,
              26.10529606770833
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 273.7184076866813,
            "min": 251.40794754016065,
            "q1": 258.4777423155738,
            "median": 269.4018068426724,
            "q3": 284.0729431306307,
            "max": 305.2315986043689,
            "samples": [
              251.40794754016065,
              258.4777423155738,
              269.4018068426724,
              284.0729431306307,
              305.2315986043689
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "256",
          "partnerCount": "3"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1759.2598950612905,
            "min": 1503.7272908545726,
            "q1": 1512.1790572289156,
            "median": 1520.2951259484066,
            "q3": 1599.1456980830671,
            "max": 2660.952303191489,
            "samples": [
              2660.952303191489,
              1599.1456980830671,
              1520.2951259484066,
              1512.1790572289156,
              1503.7272908545726
            ],
            "confidence99_9": [
              -187.25467272945434,
              3705.7744628520354
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 118.16554653516114,
            "min": 116.62607824160449,
            "q1": 116.78086462220149,
            "median": 117.59791118421052,
            "q3": 119.59327838740458,
            "max": 120.22960024038463,
            "samples": [
              116.62607824160449,
              117.59791118421052,
              116.78086462220149,
              120.22960024038463,
              119.59327838740458
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1720.7450774166487,
            "min": 1641.1024133986928,
            "q1": 1688.2436744966444,
            "median": 1728.8346620689656,
            "q3": 1728.8609396551724,
            "max": 1816.683697463768,
            "samples": [
              1728.8346620689656,
              1816.683697463768,
              1728.8609396551724,
              1688.2436744966444,
              1641.1024133986928
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "partners",
        "params": {
          "depth": "256",
          "partnerCount": "8"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1692.2290257200962,
            "min": 1455.9684337700146,
            "q1": 1506.8265735735736,
            "median": 1568.376392801252,
            "q3": 1591.2387821939587,
            "max": 2338.734946261682,
            "samples": [
              2338.734946261682,
              1591.2387821939587,
              1506.8265735735736,
              1455.9684337700146,
              1568.376392801252
            ],
            "confidence99_9": [
              285.6873795168599,
              3098.7706719233324
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 124.72876824350021,
            "min": 122.35798608398437,
            "q1": 123.95951771653544,
            "median": 124.84199640376984,
            "q3": 125.214473,
            "max": 127.26986801321138,
            "samples": [
              122.35798608398437,
              125.214473,
              124.84199640376984,
              123.95951771653544,
              127.26986801321138
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1680.1333633751435,
            "min": 1669.8791033333332,
            "q1": 1671.5968933333334,
            "median": 1678.880981543624,
            "q3": 1688.4173775167785,
            "max": 1691.8924611486489,
            "samples": [
              1688.4173775167785,
              1678.880981543624,
              1669.8791033333332,
              1691.8924611486489,
              1671.5968933333334
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "simple",
        "params": {
          "depth": "16"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 122.51002305166791,
            "min": 97.06243406113538,
            "q1": 97.34986626435663,
            "median": 97.5144031975044,
            "q3": 135.51633977825853,
            "max": 185.1070719570847,
            "samples": [
              185.1070719570847,
              135.51633977825853,
              97.5144031975044,
              97.06243406113538,
              97.34986626435663
            ],
            "confidence99_9": [
              -26.53712130190037,
              271.5571674052362
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 13.79072385079874,
            "min": 13.702825270432692,
            "q1": 13.73455923568619,
            "median": 13.747610891062063,
            "q3": 13.775670843419894,
            "max": 13.992953013392857,
            "samples": [
              13.992953013392857,
              13.775670843419894,
              13.702825270432692,
              13.73455923568619,
              13.747610891062063
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 341.1041289500443,
            "min": 169.27791199324324,
            "q1": 189.48095625,
            "median": 191.24939596036586,
            "q3": 332.7373863031915,
            "max": 822.774994243421,
            "samples": [
              822.774994243421,
              332.7373863031915,
              191.24939596036586,
              189.48095625,
              169.27791199324324
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "simple",
        "params": {
          "depth": "256"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1217.313967305695,
            "min": 1155.980031177829,
            "q1": 1202.8450192307691,
            "median": 1211.1089818401938,
            "q3": 1217.1432673147024,
            "max": 1299.4925369649804,
            "samples": [
              1202.8450192307691,
              1211.1089818401938,
              1155.980031177829,
              1217.1432673147024,
              1299.4925369649804
            ],
            "confidence99_9": [
              1017.571203981104,
              1417.0567306302862
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 112.85454483529575,
            "min": 110.98894824911346,
            "q1": 111.64714799107142,
            "median": 112.65129653776978,
            "q3": 113.26651958786232,
            "max": 115.71881181066176,
            "samples": [
              111.64714799107142,
              110.98894824911346,
              112.65129653776978,
              113.26651958786232,
              115.71881181066176
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 1725.496309395321,
            "min": 1701.5786836734694,
            "q1": 1710.6388911564625,
            "median": 1724.4580689655172,
            "q3": 1725.1438327586206,
            "max": 1765.6620704225354,
            "samples": [
              1765.6620704225354,
              1701.5786836734694,
              1725.1438327586206,
              1710.6388911564625,
              1724.4580689655172
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "16",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 2145.0179355671257,
            "min": 1954.869197265625,
            "q1": 1967.6201728880158,
            "median": 1985.378899009901,
            "q3": 2034.4047642276423,
            "max": 2782.8166444444446,
            "samples": [
              2782.8166444444446,
              2034.4047642276423,
              1954.869197265625,
              1985.378899009901,
              1967.6201728880158
            ],
            "confidence99_9": [
              767.1899574618315,
              3522.84591367242
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 733.487263336952,
            "min": 722.0179727011495,
            "q1": 733.8473070175438,
            "median": 735.0055175438597,
            "q3": 735.6770926470588,
            "max": 740.8884267751479,
            "samples": [
              735.0055175438597,
              722.0179727011495,
              740.8884267751479,
              733.8473070175438,
              735.6770926470588
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 3239.722559983614,
            "min": 3172.5073037974685,
            "q1": 3227.4515161290324,
            "median": 3244.9577806451616,
            "q3": 3273.172460784314,
            "max": 3280.5237385620917,
            "samples": [
              3244.9577806451616,
              3273.172460784314,
              3227.4515161290324,
              3280.5237385620917,
              3172.5073037974685
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "16",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 406.3245105718746,
            "min": 321.2409316431322,
            "q1": 347.50059305555556,
            "median": 387.09394354215004,
            "q3": 406.19896636952996,
            "max": 569.5881182490051,
            "samples": [
              569.5881182490051,
              406.19896636952996,
              387.09394354215004,
              347.50059305555556,
              321.2409316431322
            ],
            "confidence99_9": [
              32.37412311100053,
              780.2748980327488
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 53.212213572693,
            "min": 52.72611016149329,
            "q1": 52.796727296560405,
            "median": 53.31434518494898,
            "q3": 53.60951530393836,
            "max": 53.61436991652398,
            "samples": [
              53.60951530393836,
              52.796727296560405,
              52.72611016149329,
              53.31434518494898,
              53.61436991652398
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 462.8320431145776,
            "min": 448.60697276785714,
            "q1": 458.2455939781022,
            "median": 464.6933842592593,
            "q3": 471.23478101503764,
            "max": 471.3794835526316,
            "samples": [
              448.60697276785714,
              458.2455939781022,
              464.6933842592593,
              471.23478101503764,
              471.3794835526316
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "256",
          "hierarchyDepth": "32"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 155254.0728857143,
            "min": 145131.739,
            "q1": 148701.53671428573,
            "median": 153495.458,
            "q3": 157751.3397142857,
            "max": 171190.291,
            "samples": [
              148701.53671428573,
              157751.3397142857,
              171190.291,
              153495.458,
              145131.739
            ],
            "confidence99_9": [
              116331.62913854785,
              194176.51663288072
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 3231.736898529481,
            "min": 3212.4782147435894,
            "q1": 3215.950205128205,
            "median": 3224.136326923077,
            "q3": 3243.651638709677,
            "max": 3262.468107142857,
            "samples": [
              3262.468107142857,
              3224.136326923077,
              3243.651638709677,
              3215.950205128205,
              3212.4782147435894
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 33879.34871333333,
            "min": 33430.87873333333,
            "q1": 33666.69143333333,
            "median": 34038.33456666667,
            "q3": 34061.7209,
            "max": 34199.11793333333,
            "samples": [
              34038.33456666667,
              33666.69143333333,
              34061.7209,
              33430.87873333333,
              34199.11793333333
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      },
      {
        "name": "superChain",
        "params": {
          "depth": "256",
          "hierarchyDepth": "4"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 8763.297676029879,
            "min": 8244.685426229507,
            "q1": 8474.541033613445,
            "median": 8623.470196581196,
            "q3": 8920.537876106195,
            "max": 9553.253847619048,
            "samples": [
              8623.470196581196,
              8920.537876106195,
              9553.253847619048,
              8474.541033613445,
              8244.685426229507
            ],
            "confidence99_9": [
              6818.202132203866,
              10708.39321985589
            ],
            "runtime": {
              "jdkVersion": "23.0.2",
              "vmName": "OpenJDK 64-Bit Server VM",
              "vmVersion": "23.0.2+7",
              "jvmArgs": [
                "-Xms512m",
                "-Xmx512m",
                "-Dfile.encoding=UTF-8",
                "-Duser.country",
                "-Duser.language=en",
                "-Duser.variant"
              ],
              "forks": 1,
              "threads": 1,
              "warmupIterations": 3,
              "warmupTime": "1 s",
              "measurementIterations": 5,
              "measurementTime": "1 s"
            }
          },
          "CPython": {
            "mean": 411.4984816645134,
            "min": 400.28402547770696,
            "q1": 405.4036814516129,
            "median": 414.96863203642386,
            "q3": 417.29154083333333,
            "max": 419.54452852348993,
            "samples": [
              417.29154083333333,
              419.54452852348993,
              414.96863203642386,
              405.4036814516129,
              400.28402547770696
            ],
            "runtime": {
              "python": "3.14.7 (main, Aug  6 2026, 02:19:46) [GCC 13.3.0]",
              "label": "CPython",
              "guest_jit": false,
              "platform": "Linux-6.17.0-1022-azure-x86_64-with-glibc2.39",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          },
          "GraalPy": {
            "mean": 5583.547691996869,
            "min": 5466.792803278689,
            "q1": 5557.839977777779,
            "median": 5614.877150837989,
            "q3": 5638.466073033708,
            "max": 5639.7624550561795,
            "samples": [
              5557.839977777779,
              5639.7624550561795,
              5638.466073033708,
              5614.877150837989,
              5466.792803278689
            ],
            "runtime": {
              "python": "3.12.8 (Tue Oct 06 00:18:53 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
              "label": "graalpy-jvm-interpreter",
              "guest_jit": false,
              "engine_implementation": "Interpreted",
              "engine_options": {
                "engine.WarnInterpreterOnly": "false"
              },
              "java_version": "23.0.2+7",
              "java_vm": "OpenJDK 64-Bit Server VM",
              "java_home": "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/23.0.2-7/x64",
              "jvm_args": [
                "-Xms512m",
                "-Xmx512m",
                "-Xss128m"
              ],
              "platform": "Linux-6.17.0-1022-azure-x86_64-with",
              "gc_enabled": true,
              "warmups": 3,
              "iterations": 5,
              "seconds": 1.0
            }
          }
        }
      }
    ],
    "id": "37627294498-1",
    "branch": "object-literal",
    "commit": {
      "id": "47efe6a871b4801c1450f8b6bde9a899a3da3a96",
      "url": "https://github.com/plug-obp/variohyve/commit/47efe6a871b4801c1450f8b6bde9a899a3da3a96",
      "message": "Accept exact lexical ancestry for outer"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37627294498/attempts/1"
  }
];
