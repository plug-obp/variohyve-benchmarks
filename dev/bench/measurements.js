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
  }
];
