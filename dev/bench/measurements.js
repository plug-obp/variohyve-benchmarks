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
  },
  {
    "schema": 1,
    "date": "2026-10-07T13:31:35.471437+00:00",
    "jmh_sha256": "9138c23d832777c60b28be69791132d11ac967c40a5473533d00dfcdd7ce70fb",
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
            "mean": 19.448674463737554,
            "min": 19.229468968699532,
            "q1": 19.285143672179174,
            "median": 19.28919285493946,
            "q3": 19.362020562770564,
            "max": 20.077546260099037,
            "samples": [
              19.362020562770564,
              20.077546260099037,
              19.28919285493946,
              19.285143672179174,
              19.229468968699532
            ],
            "confidence99_9": [
              18.082894450295214,
              20.814454477179893
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
            "mean": 0.16979371737582766,
            "min": 0.16933005114813537,
            "q1": 0.16944958327488346,
            "median": 0.16947105905100784,
            "q3": 0.16960218302408853,
            "max": 0.17111571038102302,
            "samples": [
              0.17111571038102302,
              0.16947105905100784,
              0.16933005114813537,
              0.16944958327488346,
              0.16960218302408853
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
            "mean": 1.0963602413372298,
            "min": 1.0821725890573148,
            "q1": 1.0851214945295218,
            "median": 1.0887436663872372,
            "q3": 1.0973295135498047,
            "max": 1.1284339431622707,
            "samples": [
              1.0887436663872372,
              1.0851214945295218,
              1.0973295135498047,
              1.0821725890573148,
              1.1284339431622707
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
            "mean": 405.540586438486,
            "min": 254.53816988809766,
            "q1": 276.16718967421315,
            "median": 390.5010433086227,
            "q3": 541.9899935064935,
            "max": 564.5065358150028,
            "samples": [
              564.5065358150028,
              541.9899935064935,
              390.5010433086227,
              276.16718967421315,
              254.53816988809766
            ],
            "confidence99_9": [
              -151.32033289169,
              962.401505768662
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
            "mean": 644.4293796531135,
            "min": 473.2945111111111,
            "q1": 549.3885886875344,
            "median": 558.1940623955431,
            "q3": 637.1767080152672,
            "max": 1004.0930280561122,
            "samples": [
              1004.0930280561122,
              637.1767080152672,
              549.3885886875344,
              473.2945111111111,
              558.1940623955431
            ],
            "confidence99_9": [
              -161.3747145474971,
              1450.2334738537243
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
            "mean": 2501.5741180213745,
            "min": 2107.9579810526316,
            "q1": 2115.5177040169133,
            "median": 2140.090260683761,
            "q3": 2480.115126237624,
            "max": 3664.189518115942,
            "samples": [
              3664.189518115942,
              2480.115126237624,
              2140.090260683761,
              2115.5177040169133,
              2107.9579810526316
            ],
            "confidence99_9": [
              -72.01236785135825,
              5075.160603894107
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
            "mean": 3913.4668978676405,
            "min": 3300.987798679868,
            "q1": 3308.142534653465,
            "median": 3314.817860927152,
            "q3": 3622.0720974729243,
            "max": 6021.31419760479,
            "samples": [
              6021.31419760479,
              3622.0720974729243,
              3314.817860927152,
              3308.142534653465,
              3300.987798679868
            ],
            "confidence99_9": [
              -653.9958155546306,
              8480.929611289912
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
            "mean": 478.96697863027623,
            "min": 344.84189796621854,
            "q1": 379.15735822592876,
            "median": 454.1543522212149,
            "q3": 475.01225439012813,
            "max": 741.6690303478905,
            "samples": [
              741.6690303478905,
              475.01225439012813,
              454.1543522212149,
              379.15735822592876,
              344.84189796621854
            ],
            "confidence99_9": [
              -122.50795357419452,
              1080.441910834747
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
            "mean": 726.9118397534705,
            "min": 719.6707040229886,
            "q1": 726.1692731213873,
            "median": 726.9734978197674,
            "q3": 729.3151046511628,
            "max": 732.4306191520467,
            "samples": [
              726.9734978197674,
              726.1692731213873,
              732.4306191520467,
              729.3151046511628,
              719.6707040229886
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
            "mean": 1939.2102108570514,
            "min": 1920.9454064885497,
            "q1": 1932.1324038461537,
            "median": 1935.6979307692307,
            "q3": 1950.9769127906977,
            "max": 1956.298400390625,
            "samples": [
              1932.1324038461537,
              1956.298400390625,
              1950.9769127906977,
              1920.9454064885497,
              1935.6979307692307
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
            "mean": 232.89484130040364,
            "min": 146.68032752562226,
            "q1": 184.1486259204713,
            "median": 216.48254858255788,
            "q3": 270.9886837121212,
            "max": 346.1740207612457,
            "samples": [
              346.1740207612457,
              270.9886837121212,
              216.48254858255788,
              184.1486259204713,
              146.68032752562226
            ],
            "confidence99_9": [
              -67.61462986045927,
              533.4043124612665
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
            "mean": 47.553144457166944,
            "min": 47.46096178977273,
            "q1": 47.47811737689394,
            "median": 47.51417831439394,
            "q3": 47.536623579545456,
            "max": 47.77584122522866,
            "samples": [
              47.51417831439394,
              47.47811737689394,
              47.46096178977273,
              47.77584122522866,
              47.536623579545456
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
            "mean": 293.6547165140203,
            "min": 284.94286647727273,
            "q1": 285.86372045454544,
            "median": 293.6774807242991,
            "q3": 297.3956040683962,
            "max": 306.39391084558827,
            "samples": [
              284.94286647727273,
              285.86372045454544,
              293.6774807242991,
              297.3956040683962,
              306.39391084558827
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
            "mean": 2431.181008561422,
            "min": 2167.1239136069116,
            "q1": 2174.1430433839478,
            "median": 2213.839426048565,
            "q3": 2230.076592427617,
            "max": 3370.7220673400675,
            "samples": [
              3370.7220673400675,
              2213.839426048565,
              2230.076592427617,
              2167.1239136069116,
              2174.1430433839478
            ],
            "confidence99_9": [
              406.19218954278494,
              4456.169827580059
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
            "mean": 880.4233451804578,
            "min": 873.6260859375,
            "q1": 881.174724471831,
            "median": 881.4515933098592,
            "q3": 882.5592165492958,
            "max": 883.3051056338028,
            "samples": [
              882.5592165492958,
              881.174724471831,
              881.4515933098592,
              883.3051056338028,
              873.6260859375
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
            "mean": 4118.821797960981,
            "min": 4102.205385245901,
            "q1": 4110.341540983607,
            "median": 4119.192942622951,
            "q3": 4124.867364754098,
            "max": 4137.501756198347,
            "samples": [
              4102.205385245901,
              4137.501756198347,
              4110.341540983607,
              4124.867364754098,
              4119.192942622951
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
            "mean": 1780.3263964603702,
            "min": 1445.1487316017317,
            "q1": 1507.0503192771084,
            "median": 1534.931766055046,
            "q3": 1806.5370666666668,
            "max": 2607.9640987012986,
            "samples": [
              2607.9640987012986,
              1806.5370666666668,
              1534.931766055046,
              1445.1487316017317,
              1507.0503192771084
            ],
            "confidence99_9": [
              -79.29301471512417,
              3639.9458076358646
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
            "mean": 185.4613928434308,
            "min": 184.6267693014706,
            "q1": 184.67704908088237,
            "median": 184.76461102941175,
            "q3": 186.0764375,
            "max": 187.1620973053892,
            "samples": [
              184.76461102941175,
              186.0764375,
              187.1620973053892,
              184.6267693014706,
              184.67704908088237
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
            "mean": 2459.5261618646487,
            "min": 2449.0279490291264,
            "q1": 2460.7411740196076,
            "median": 2461.4259656862746,
            "q3": 2461.729725490196,
            "max": 2464.7059950980392,
            "samples": [
              2460.7411740196076,
              2461.4259656862746,
              2461.729725490196,
              2449.0279490291264,
              2464.7059950980392
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
            "mean": 18.60374964622513,
            "min": 18.212731988210464,
            "q1": 18.250158687005072,
            "median": 18.373255280461375,
            "q3": 18.375690081962706,
            "max": 19.806912193486024,
            "samples": [
              19.806912193486024,
              18.373255280461375,
              18.375690081962706,
              18.212731988210464,
              18.250158687005072
            ],
            "confidence99_9": [
              15.998752523153563,
              21.208746769296695
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
            "mean": 0.08868055354962899,
            "min": 0.08798394792929463,
            "q1": 0.08831305019841718,
            "median": 0.08840040015071803,
            "q3": 0.08933506819518687,
            "max": 0.08937030127452827,
            "samples": [
              0.08937030127452827,
              0.08933506819518687,
              0.08798394792929463,
              0.08840040015071803,
              0.08831305019841718
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
            "mean": 4.200612659238586,
            "min": 0.8504773661295573,
            "q1": 1.5452506149871439,
            "median": 5.203173277509974,
            "q3": 6.6395933145059125,
            "max": 6.764568723060345,
            "samples": [
              6.6395933145059125,
              6.764568723060345,
              5.203173277509974,
              1.5452506149871439,
              0.8504773661295573
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
            "mean": 24.870604095826184,
            "min": 23.621821709454192,
            "q1": 23.640125824058977,
            "median": 23.73589793594306,
            "q3": 23.929686539334973,
            "max": 29.42548847033973,
            "samples": [
              29.42548847033973,
              23.73589793594306,
              23.640125824058977,
              23.621821709454192,
              23.929686539334973
            ],
            "confidence99_9": [
              15.054597869603134,
              34.68661032204923
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
            "mean": 6.372473967327225,
            "min": 6.347905590503246,
            "q1": 6.366235148640422,
            "median": 6.369598119165991,
            "q3": 6.372997425426136,
            "max": 6.405633552900327,
            "samples": [
              6.347905590503246,
              6.405633552900327,
              6.369598119165991,
              6.372997425426136,
              6.366235148640422
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
            "mean": 370.190787234731,
            "min": 312.35757363861387,
            "q1": 350.96512150837987,
            "median": 381.2212275152439,
            "q3": 396.87986155063294,
            "max": 409.53015196078434,
            "samples": [
              312.35757363861387,
              350.96512150837987,
              381.2212275152439,
              396.87986155063294,
              409.53015196078434
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
            "mean": 150.16252576095616,
            "min": 106.44858774076833,
            "q1": 106.49941088160136,
            "median": 131.2456097720723,
            "q3": 186.33654474418606,
            "max": 220.28247566615283,
            "samples": [
              220.28247566615283,
              186.33654474418606,
              131.2456097720723,
              106.49941088160136,
              106.44858774076833
            ],
            "confidence99_9": [
              -46.188154487094465,
              346.5132060090068
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
            "mean": 17.69515658569436,
            "min": 17.65221315456081,
            "q1": 17.66395998733108,
            "median": 17.66455102759009,
            "q3": 17.682204479870496,
            "max": 17.812854279119318,
            "samples": [
              17.682204479870496,
              17.812854279119318,
              17.65221315456081,
              17.66455102759009,
              17.66395998733108
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
            "mean": 248.40380418034167,
            "min": 238.32443181818184,
            "q1": 245.2283369140625,
            "median": 249.0250523313492,
            "q3": 251.75843575000002,
            "max": 257.68276408811477,
            "samples": [
              238.32443181818184,
              245.2283369140625,
              249.0250523313492,
              251.75843575000002,
              257.68276408811477
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
            "mean": 1399.47653475602,
            "min": 1260.6791662468513,
            "q1": 1281.9692983354673,
            "median": 1293.8074121447028,
            "q3": 1439.4768417266187,
            "max": 1721.4499553264604,
            "samples": [
              1721.4499553264604,
              1281.9692983354673,
              1293.8074121447028,
              1439.4768417266187,
              1260.6791662468513
            ],
            "confidence99_9": [
              655.0325994242506,
              2143.9204700877895
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
            "mean": 159.29011729127265,
            "min": 154.7561847153465,
            "q1": 154.75870080445543,
            "median": 155.09192233910892,
            "q3": 156.01569415222772,
            "max": 175.82808444522473,
            "samples": [
              155.09192233910892,
              175.82808444522473,
              154.7561847153465,
              154.75870080445543,
              156.01569415222772
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
            "mean": 2414.2909483150183,
            "min": 2403.5828761904763,
            "q1": 2409.6523653846157,
            "median": 2415.510420673077,
            "q3": 2416.229889423077,
            "max": 2426.479189903846,
            "samples": [
              2409.6523653846157,
              2416.229889423077,
              2403.5828761904763,
              2415.510420673077,
              2426.479189903846
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
            "mean": 279.0352812964286,
            "min": 165.66622706194104,
            "q1": 219.9849659639877,
            "median": 273.6540664842681,
            "q3": 342.081656420765,
            "max": 393.7894905511811,
            "samples": [
              393.7894905511811,
              342.081656420765,
              273.6540664842681,
              219.9849659639877,
              165.66622706194104
            ],
            "confidence99_9": [
              -73.41862752218452,
              631.4891901150418
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
            "mean": 26.92130116301813,
            "min": 26.782572827482877,
            "q1": 26.899623528467465,
            "median": 26.921995612157534,
            "q3": 26.98449498922414,
            "max": 27.017818857758623,
            "samples": [
              27.017818857758623,
              26.921995612157534,
              26.98449498922414,
              26.899623528467465,
              26.782572827482877
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
            "mean": 334.31322969830364,
            "min": 312.6179325,
            "q1": 326.9256917317708,
            "median": 335.73804953457443,
            "q3": 340.17886073369567,
            "max": 356.1056139914773,
            "samples": [
              312.6179325,
              326.9256917317708,
              335.73804953457443,
              340.17886073369567,
              356.1056139914773
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
            "mean": 310.5186196102096,
            "min": 197.602355788226,
            "q1": 213.4594268058811,
            "median": 296.1211041728322,
            "q3": 382.9269287356322,
            "max": 462.48328254847644,
            "samples": [
              462.48328254847644,
              382.9269287356322,
              296.1211041728322,
              213.4594268058811,
              197.602355788226
            ],
            "confidence99_9": [
              -123.05978304665064,
              744.0970222670699
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
            "mean": 33.194536632680084,
            "min": 33.111252317266946,
            "q1": 33.13897182865466,
            "median": 33.21361715439619,
            "q3": 33.21578936043432,
            "max": 33.29305250264831,
            "samples": [
              33.13897182865466,
              33.21578936043432,
              33.29305250264831,
              33.21361715439619,
              33.111252317266946
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
            "mean": 378.5005887299332,
            "min": 353.9481175847458,
            "q1": 364.9753619186046,
            "median": 380.25557462121213,
            "q3": 390.4853843167702,
            "max": 402.8385052083333,
            "samples": [
              353.9481175847458,
              364.9753619186046,
              380.25557462121213,
              390.4853843167702,
              402.8385052083333
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
            "mean": 1972.702369939744,
            "min": 1681.1867781512606,
            "q1": 1693.2449307432432,
            "median": 1744.6335905923345,
            "q3": 2079.6514917012446,
            "max": 2664.7950585106382,
            "samples": [
              2664.7950585106382,
              2079.6514917012446,
              1681.1867781512606,
              1744.6335905923345,
              1693.2449307432432
            ],
            "confidence99_9": [
              355.5195096759071,
              3589.8852302035807
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
            "mean": 167.18715857722313,
            "min": 165.99683134920636,
            "q1": 166.08572585978837,
            "median": 167.2090001671123,
            "q3": 167.44348094919786,
            "max": 169.2007545608108,
            "samples": [
              167.2090001671123,
              167.44348094919786,
              166.08572585978837,
              169.2007545608108,
              165.99683134920636
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
            "mean": 2437.911810233347,
            "min": 2386.440471428571,
            "q1": 2403.3022023809526,
            "median": 2439.4147669902914,
            "q3": 2466.9543529411762,
            "max": 2493.4472574257425,
            "samples": [
              2403.3022023809526,
              2493.4472574257425,
              2466.9543529411762,
              2386.440471428571,
              2439.4147669902914
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
            "mean": 2079.122991112059,
            "min": 1679.1815033557048,
            "q1": 1689.0277723440136,
            "median": 1769.6939222614842,
            "q3": 2288.7188493150684,
            "max": 2968.9929082840235,
            "samples": [
              2968.9929082840235,
              2288.7188493150684,
              1679.1815033557048,
              1689.0277723440136,
              1769.6939222614842
            ],
            "confidence99_9": [
              -67.9975095499758,
              4226.243491774094
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
            "mean": 174.08439763358476,
            "min": 173.1907688190608,
            "q1": 173.28320770027625,
            "median": 173.43720683701656,
            "q3": 174.6190872905028,
            "max": 175.89171752106742,
            "samples": [
              173.1907688190608,
              174.6190872905028,
              173.28320770027625,
              175.89171752106742,
              173.43720683701656
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
            "mean": 2498.5518377100343,
            "min": 2485.114410891089,
            "q1": 2491.77923019802,
            "median": 2495.904475124378,
            "q3": 2500.256105,
            "max": 2519.7049673366837,
            "samples": [
              2500.256105,
              2519.7049673366837,
              2491.77923019802,
              2495.904475124378,
              2485.114410891089
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
            "mean": 143.06412003716,
            "min": 105.21685610602714,
            "q1": 105.38353849394419,
            "median": 111.0905181030653,
            "q3": 175.5917079754601,
            "max": 218.03797950730325,
            "samples": [
              218.03797950730325,
              175.5917079754601,
              111.0905181030653,
              105.38353849394419,
              105.21685610602714
            ],
            "confidence99_9": [
              -54.72629984451112,
              340.8545399188311
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
            "mean": 17.356673965387294,
            "min": 17.222039610745615,
            "q1": 17.249915672971493,
            "median": 17.306966088219024,
            "q3": 17.424478118086284,
            "max": 17.579970336914062,
            "samples": [
              17.222039610745615,
              17.306966088219024,
              17.424478118086284,
              17.249915672971493,
              17.579970336914062
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
            "mean": 279.0671761220345,
            "min": 252.1490441028226,
            "q1": 256.9317341188525,
            "median": 260.96266848958334,
            "q3": 265.790672404661,
            "max": 359.5017614942529,
            "samples": [
              359.5017614942529,
              256.9317341188525,
              260.96266848958334,
              265.790672404661,
              252.1490441028226
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
            "mean": 1394.0870374646547,
            "min": 1289.5940824742268,
            "q1": 1299.1412282749675,
            "median": 1309.2348366013073,
            "q3": 1326.2101218543046,
            "max": 1746.254918118467,
            "samples": [
              1746.254918118467,
              1309.2348366013073,
              1326.2101218543046,
              1299.1412282749675,
              1289.5940824742268
            ],
            "confidence99_9": [
              634.2239661952611,
              2153.950108734048
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
            "mean": 153.92770217835505,
            "min": 152.16415822208737,
            "q1": 153.88784926470586,
            "median": 154.0560421262255,
            "q3": 154.30745772058822,
            "max": 155.2230035581683,
            "samples": [
              154.30745772058822,
              154.0560421262255,
              153.88784926470586,
              155.2230035581683,
              152.16415822208737
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
            "mean": 2393.0854909658583,
            "min": 2379.662492924528,
            "q1": 2389.984992857143,
            "median": 2394.9217000000003,
            "q3": 2399.0912261904764,
            "max": 2401.7670428571428,
            "samples": [
              2379.662492924528,
              2389.984992857143,
              2401.7670428571428,
              2394.9217000000003,
              2399.0912261904764
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
            "mean": 2773.683349120678,
            "min": 2234.8669151785716,
            "q1": 2237.406845982143,
            "median": 2242.7782147651005,
            "q3": 2634.023355263158,
            "max": 4519.341414414414,
            "samples": [
              4519.341414414414,
              2634.023355263158,
              2237.406845982143,
              2234.8669151785716,
              2242.7782147651005
            ],
            "confidence99_9": [
              -1041.468748095026,
              6588.835446336382
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
            "mean": 941.3039570336118,
            "min": 937.8381557835821,
            "q1": 938.6884188432836,
            "median": 939.0320055970149,
            "q3": 943.902322368421,
            "max": 947.0588825757576,
            "samples": [
              938.6884188432836,
              943.902322368421,
              947.0588825757576,
              939.0320055970149,
              937.8381557835821
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
            "mean": 4662.3727453703705,
            "min": 4645.851115740741,
            "q1": 4663.710370370371,
            "median": 4666.253175925926,
            "q3": 4667.066449074074,
            "max": 4668.982615740741,
            "samples": [
              4667.066449074074,
              4645.851115740741,
              4663.710370370371,
              4666.253175925926,
              4668.982615740741
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
            "mean": 561.4329608195198,
            "min": 399.18281803671186,
            "q1": 463.93384458834413,
            "median": 474.9665536562203,
            "q3": 713.6289173789174,
            "max": 755.4526704374057,
            "samples": [
              755.4526704374057,
              713.6289173789174,
              474.9665536562203,
              399.18281803671186,
              463.93384458834413
            ],
            "confidence99_9": [
              -59.807556963085176,
              1182.6734786021248
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
            "mean": 68.52723008557399,
            "min": 68.26535407608695,
            "q1": 68.50302710597826,
            "median": 68.51522004076088,
            "q3": 68.58893948739035,
            "max": 68.76360971765351,
            "samples": [
              68.58893948739035,
              68.50302710597826,
              68.26535407608695,
              68.76360971765351,
              68.51522004076088
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
            "mean": 658.4502620135204,
            "min": 652.301357421875,
            "q1": 653.1193600260416,
            "median": 653.7501608072916,
            "q3": 658.1157019736843,
            "max": 674.9647298387097,
            "samples": [
              653.7501608072916,
              652.301357421875,
              653.1193600260416,
              658.1157019736843,
              674.9647298387097
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
            "mean": 210214.94200000004,
            "min": 192838.9495,
            "q1": 210943.937,
            "median": 211454.6856,
            "q3": 214120.5594,
            "max": 221716.5785,
            "samples": [
              210943.937,
              192838.9495,
              221716.5785,
              214120.5594,
              211454.6856
            ],
            "confidence99_9": [
              169303.09595161956,
              251126.78804838052
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
            "mean": 4470.257725735328,
            "min": 4442.67303539823,
            "q1": 4459.920318584071,
            "median": 4469.391441964285,
            "q3": 4473.981566964286,
            "max": 4505.322265765766,
            "samples": [
              4505.322265765766,
              4469.391441964285,
              4473.981566964286,
              4459.920318584071,
              4442.67303539823
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
            "mean": 49511.50647666666,
            "min": 49060.26966666667,
            "q1": 49140.6378095238,
            "median": 49365.95614285714,
            "q3": 49662.273714285715,
            "max": 50328.39505,
            "samples": [
              49060.26966666667,
              49140.6378095238,
              49662.273714285715,
              49365.95614285714,
              50328.39505
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
            "mean": 9342.948763629687,
            "min": 8950.25299107143,
            "q1": 8971.599575221238,
            "median": 9205.196495412843,
            "q3": 9417.97151401869,
            "max": 10169.723242424243,
            "samples": [
              9205.196495412843,
              8950.25299107143,
              9417.97151401869,
              10169.723242424243,
              8971.599575221238
            ],
            "confidence99_9": [
              7417.36658197423,
              11268.530945285143
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
            "mean": 615.6662928691031,
            "min": 613.3962867647059,
            "q1": 614.5634295343137,
            "median": 614.7315594362744,
            "q3": 615.2186378676471,
            "max": 620.4215507425743,
            "samples": [
              614.7315594362744,
              620.4215507425743,
              614.5634295343137,
              615.2186378676471,
              613.3962867647059
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
            "mean": 7754.209980382107,
            "min": 7579.535992424242,
            "q1": 7612.508825757576,
            "median": 7622.067303030302,
            "q3": 7947.2964126984125,
            "max": 8009.641368,
            "samples": [
              7579.535992424242,
              7622.067303030302,
              7612.508825757576,
              7947.2964126984125,
              8009.641368
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
    "id": "37627767615-1",
    "branch": "object-literal",
    "commit": {
      "id": "827b2d7efc6c7aee20e58095aa7d4f1adeac7ccd",
      "url": "https://github.com/plug-obp/variohyve/commit/827b2d7efc6c7aee20e58095aa7d4f1adeac7ccd",
      "message": "added updated spec"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37627767615/attempts/1"
  },
  {
    "schema": 1,
    "date": "2026-10-08T23:19:44.609203+00:00",
    "jmh_sha256": "799890f18c8a18e78a91f6b8f65db6d321c47068567b02cf8d05c1a846e6ac42",
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
            "mean": 646.0759920194857,
            "min": 550.4900208676552,
            "q1": 581.6295782155272,
            "median": 598.57978601315,
            "q3": 642.3900737179487,
            "max": 857.290501283148,
            "samples": [
              857.290501283148,
              642.3900737179487,
              550.4900208676552,
              598.57978601315,
              581.6295782155272
            ],
            "confidence99_9": [
              173.79854601351633,
              1118.353438025455
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
            "mean": 0.1686812183208974,
            "min": 0.16816521747295674,
            "q1": 0.16846300045474544,
            "median": 0.16879049969246376,
            "q3": 0.16879684178473542,
            "max": 0.16919053219958566,
            "samples": [
              0.16879684178473542,
              0.16879049969246376,
              0.16846300045474544,
              0.16919053219958566,
              0.16816521747295674
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
            "mean": 1.1111369103388,
            "min": 1.1005223597621059,
            "q1": 1.1019919796505488,
            "median": 1.1049943429757882,
            "q3": 1.1205494839754973,
            "max": 1.12762638533006,
            "samples": [
              1.1019919796505488,
              1.12762638533006,
              1.1049943429757882,
              1.1205494839754973,
              1.1005223597621059
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
            "mean": 1224.137071871196,
            "min": 898.398,
            "q1": 908.4336188747732,
            "median": 1221.2207057387056,
            "q3": 1471.6160088105728,
            "max": 1621.0170259319286,
            "samples": [
              1621.0170259319286,
              1471.6160088105728,
              1221.2207057387056,
              898.398,
              908.4336188747732
            ],
            "confidence99_9": [
              -30.34374243002503,
              2478.617886172417
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
            "mean": 1537.5594438039775,
            "min": 1084.347676056338,
            "q1": 1101.0574714285715,
            "median": 1473.0906485294117,
            "q3": 1860.5362282003712,
            "max": 2168.765194805195,
            "samples": [
              2168.765194805195,
              1860.5362282003712,
              1473.0906485294117,
              1101.0574714285715,
              1084.347676056338
            ],
            "confidence99_9": [
              -291.82654184477155,
              3366.945429452727
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
            "mean": 4012.421587498524,
            "min": 2913.830104651163,
            "q1": 2948.7629911764707,
            "median": 4120.099078189301,
            "q3": 4727.132431924882,
            "max": 5352.283331550802,
            "samples": [
              5352.283331550802,
              4727.132431924882,
              4120.099078189301,
              2913.830104651163,
              2948.7629911764707
            ],
            "confidence99_9": [
              -141.95228470196253,
              8166.79545969901
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
            "mean": 5429.511058365906,
            "min": 4033.2846546184737,
            "q1": 4043.613875,
            "median": 5050.296442211055,
            "q3": 6697.30432,
            "max": 7323.056,
            "samples": [
              7323.056,
              6697.30432,
              5050.296442211055,
              4033.2846546184737,
              4043.613875
            ],
            "confidence99_9": [
              -412.42948415244155,
              11271.451600884255
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
            "mean": 1269.0863456543898,
            "min": 928.365202038925,
            "q1": 1020.2604638124363,
            "median": 1128.4464515765765,
            "q3": 1497.7116940298508,
            "max": 1770.6479168141593,
            "samples": [
              1770.6479168141593,
              1497.7116940298508,
              1128.4464515765765,
              928.365202038925,
              1020.2604638124363
            ],
            "confidence99_9": [
              -94.52333524738651,
              2632.696026556166
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
            "mean": 691.0348298228705,
            "min": 687.4019917582418,
            "q1": 690.178393543956,
            "median": 691.6356160220994,
            "q3": 692.9367796961326,
            "max": 693.0213680939227,
            "samples": [
              691.6356160220994,
              690.178393543956,
              687.4019917582418,
              692.9367796961326,
              693.0213680939227
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
            "mean": 1920.9136473480212,
            "min": 1879.9213515037593,
            "q1": 1887.9179511278194,
            "median": 1941.3364166666668,
            "q3": 1943.6161569767444,
            "max": 1951.7763604651163,
            "samples": [
              1887.9179511278194,
              1941.3364166666668,
              1951.7763604651163,
              1879.9213515037593,
              1943.6161569767444
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
            "mean": 1005.0427842520915,
            "min": 743.0581315007429,
            "q1": 813.8810130187144,
            "median": 1038.9673274611398,
            "q3": 1173.6296217798595,
            "max": 1255.6778275,
            "samples": [
              1255.6778275,
              1173.6296217798595,
              1038.9673274611398,
              813.8810130187144,
              743.0581315007429
            ],
            "confidence99_9": [
              149.26131405361969,
              1860.8242544505633
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
            "mean": 47.27691397493383,
            "min": 47.206595632530124,
            "q1": 47.235591820406626,
            "median": 47.250940135542166,
            "q3": 47.314679028614464,
            "max": 47.37676325757576,
            "samples": [
              47.314679028614464,
              47.250940135542166,
              47.235591820406626,
              47.206595632530124,
              47.37676325757576
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
            "mean": 306.7898013751515,
            "min": 296.0918251768868,
            "q1": 302.70178545673076,
            "median": 307.72640165441175,
            "q3": 312.16621318069303,
            "max": 315.26278140703516,
            "samples": [
              296.0918251768868,
              302.70178545673076,
              307.72640165441175,
              312.16621318069303,
              315.26278140703516
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
            "mean": 3845.467967876289,
            "min": 2883.3158879310345,
            "q1": 2982.527994047619,
            "median": 3259.36603257329,
            "q3": 4683.310514018692,
            "max": 5418.819410810811,
            "samples": [
              5418.819410810811,
              4683.310514018692,
              3259.36603257329,
              2982.527994047619,
              2883.3158879310345
            ],
            "confidence99_9": [
              -541.2810143070906,
              8232.216950059668
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
            "mean": 837.2390628803132,
            "min": 834.6728758333334,
            "q1": 835.5723083333334,
            "median": 837.3915208333334,
            "q3": 839.2545352348993,
            "max": 839.3040741666667,
            "samples": [
              835.5723083333334,
              839.2545352348993,
              839.3040741666667,
              834.6728758333334,
              837.3915208333334
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
            "mean": 4082.448337929452,
            "min": 4049.623173387097,
            "q1": 4088.4846666666667,
            "median": 4088.941130081301,
            "q3": 4089.5260731707317,
            "max": 4095.6666463414635,
            "samples": [
              4049.623173387097,
              4095.6666463414635,
              4088.4846666666667,
              4088.941130081301,
              4089.5260731707317
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
            "mean": 3017.296600230212,
            "min": 2253.532975225225,
            "q1": 2298.042256292906,
            "median": 2846.514400568182,
            "q3": 3602.377169064748,
            "max": 4086.0162,
            "samples": [
              4086.0162,
              3602.377169064748,
              2846.514400568182,
              2298.042256292906,
              2253.532975225225
            ],
            "confidence99_9": [
              -95.72283950791507,
              6130.316039968338
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
            "mean": 183.58565891112548,
            "min": 181.6964015534682,
            "q1": 182.21724200581394,
            "median": 184.0563768382353,
            "q3": 184.33532352941177,
            "max": 185.62295062869822,
            "samples": [
              185.62295062869822,
              184.0563768382353,
              182.21724200581394,
              181.6964015534682,
              184.33532352941177
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
            "mean": 2450.5228234532647,
            "min": 2438.0909077669903,
            "q1": 2444.4341844660194,
            "median": 2449.5191966019415,
            "q3": 2457.44081127451,
            "max": 2463.1290171568626,
            "samples": [
              2444.4341844660194,
              2457.44081127451,
              2438.0909077669903,
              2463.1290171568626,
              2449.5191966019415
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
            "mean": 638.4602288680562,
            "min": 481.0645043269231,
            "q1": 561.9878696629213,
            "median": 630.1638679245283,
            "q3": 651.1999882888745,
            "max": 867.8849141370338,
            "samples": [
              867.8849141370338,
              651.1999882888745,
              630.1638679245283,
              481.0645043269231,
              561.9878696629213
            ],
            "confidence99_9": [
              82.1512719955607,
              1194.7691857405516
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
            "mean": 0.08244890548452811,
            "min": 0.08212827522523942,
            "q1": 0.08216581356909967,
            "median": 0.0821797881587859,
            "q3": 0.08240086176062142,
            "max": 0.08336978870889415,
            "samples": [
              0.08216581356909967,
              0.08336978870889415,
              0.0821797881587859,
              0.08212827522523942,
              0.08240086176062142
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
            "mean": 3.618581998237447,
            "min": 0.9677578935585474,
            "q1": 1.0951204817562359,
            "median": 3.74268689011614,
            "q3": 6.093318401834239,
            "max": 6.194026323922073,
            "samples": [
              6.093318401834239,
              6.194026323922073,
              3.74268689011614,
              1.0951204817562359,
              0.9677578935585474
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
            "mean": 639.5567339010386,
            "min": 490.9662566241413,
            "q1": 503.83198237663646,
            "median": 634.0384689480355,
            "q3": 703.160640899508,
            "max": 865.7863206568712,
            "samples": [
              865.7863206568712,
              703.160640899508,
              503.83198237663646,
              634.0384689480355,
              490.9662566241413
            ],
            "confidence99_9": [
              43.77590098729695,
              1235.33756681478
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
            "mean": 6.443939822586552,
            "min": 6.413469235089869,
            "q1": 6.431688482987253,
            "median": 6.438548571134868,
            "q3": 6.466251586914063,
            "max": 6.469741236806705,
            "samples": [
              6.413469235089869,
              6.438548571134868,
              6.431688482987253,
              6.469741236806705,
              6.466251586914063
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
            "mean": 259.2240049680042,
            "min": 197.97723971518988,
            "q1": 250.842771,
            "median": 269.6694463900862,
            "q3": 269.844575700431,
            "max": 307.7859920343137,
            "samples": [
              269.6694463900862,
              307.7859920343137,
              269.844575700431,
              250.842771,
              197.97723971518988
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
            "mean": 872.88193148605,
            "min": 646.452964516129,
            "q1": 728.3395716363636,
            "median": 806.2596532582462,
            "q3": 1033.9055954592363,
            "max": 1149.4518725602754,
            "samples": [
              1149.4518725602754,
              1033.9055954592363,
              806.2596532582462,
              728.3395716363636,
              646.452964516129
            ],
            "confidence99_9": [
              58.2621873518915,
              1687.5016756202085
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
            "mean": 17.83504261937031,
            "min": 17.757068714488636,
            "q1": 17.76535250355114,
            "median": 17.793208647017046,
            "q3": 17.92757074254587,
            "max": 17.93201248924885,
            "samples": [
              17.757068714488636,
              17.76535250355114,
              17.793208647017046,
              17.93201248924885,
              17.92757074254587
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
            "mean": 252.2085730269731,
            "min": 243.93403125,
            "q1": 249.11907886904763,
            "median": 251.31538125,
            "q3": 254.42955106707316,
            "max": 262.24482269874477,
            "samples": [
              243.93403125,
              249.11907886904763,
              254.42955106707316,
              262.24482269874477,
              251.31538125
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
            "mean": 2527.3366511125623,
            "min": 1969.498972440945,
            "q1": 2117.351852320675,
            "median": 2236.6313964365254,
            "q3": 2884.821017241379,
            "max": 3428.380017123288,
            "samples": [
              3428.380017123288,
              2884.821017241379,
              2236.6313964365254,
              1969.498972440945,
              2117.351852320675
            ],
            "confidence99_9": [
              166.59499637016916,
              4888.078305854955
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
            "mean": 155.74814587414855,
            "min": 154.67618888546798,
            "q1": 155.13819152227722,
            "median": 155.9513324004975,
            "q3": 156.4512746875,
            "max": 156.523741875,
            "samples": [
              155.9513324004975,
              155.13819152227722,
              156.4512746875,
              156.523741875,
              154.67618888546798
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
            "mean": 2332.9680993120455,
            "min": 2323.36355787037,
            "q1": 2325.684516203704,
            "median": 2334.0122939814814,
            "q3": 2340.4099813084113,
            "max": 2341.3701471962618,
            "samples": [
              2340.4099813084113,
              2341.3701471962618,
              2334.0122939814814,
              2323.36355787037,
              2325.684516203704
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
            "mean": 1212.2676733605756,
            "min": 762.908293668955,
            "q1": 782.7251643192488,
            "median": 979.8767194525905,
            "q3": 1432.4928057142856,
            "max": 2103.3353836477986,
            "samples": [
              2103.3353836477986,
              1432.4928057142856,
              979.8767194525905,
              762.908293668955,
              782.7251643192488
            ],
            "confidence99_9": [
              -968.4830324675465,
              3393.0183791886975
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
            "mean": 27.149515928380918,
            "min": 27.040384375000002,
            "q1": 27.056487365301724,
            "median": 27.10867990301724,
            "q3": 27.169093858506944,
            "max": 27.372934140078673,
            "samples": [
              27.169093858506944,
              27.10867990301724,
              27.372934140078673,
              27.056487365301724,
              27.040384375000002
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
            "mean": 357.84672046216616,
            "min": 324.01609682642487,
            "q1": 340.6784008152174,
            "median": 357.3630532142857,
            "q3": 375.1859756736527,
            "max": 391.99007578125,
            "samples": [
              324.01609682642487,
              340.6784008152174,
              357.3630532142857,
              375.1859756736527,
              391.99007578125
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
            "mean": 1110.066311492751,
            "min": 803.7916899598393,
            "q1": 830.9255928689884,
            "median": 1148.9829896907218,
            "q3": 1335.154624,
            "max": 1431.476660944206,
            "samples": [
              1431.476660944206,
              1335.154624,
              1148.9829896907218,
              830.9255928689884,
              803.7916899598393
            ],
            "confidence99_9": [
              8.742508563311958,
              2211.39011442219
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
            "mean": 33.5799937900641,
            "min": 33.490638287927354,
            "q1": 33.50194357638889,
            "median": 33.55315451388889,
            "q3": 33.6175211338141,
            "max": 33.736711438301285,
            "samples": [
              33.50194357638889,
              33.490638287927354,
              33.736711438301285,
              33.6175211338141,
              33.55315451388889
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
            "mean": 406.38808613193703,
            "min": 381.8503658536585,
            "q1": 393.15940448113207,
            "median": 408.09059740259744,
            "q3": 423.4543547297297,
            "max": 425.38570819256756,
            "samples": [
              381.8503658536585,
              393.15940448113207,
              408.09059740259744,
              423.4543547297297,
              425.38570819256756
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
            "mean": 3324.219568364874,
            "min": 2365.4831721698115,
            "q1": 2499.726042394015,
            "median": 3453.553727586207,
            "q3": 3813.7018593155894,
            "max": 4488.633040358744,
            "samples": [
              4488.633040358744,
              3813.7018593155894,
              3453.553727586207,
              2499.726042394015,
              2365.4831721698115
            ],
            "confidence99_9": [
              -125.89293968453148,
              6774.332076414279
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
            "mean": 166.28919005874198,
            "min": 163.9606272905759,
            "q1": 164.28224001963352,
            "median": 164.94598799342106,
            "q3": 165.8225615079365,
            "max": 172.43453348214288,
            "samples": [
              172.43453348214288,
              164.28224001963352,
              165.8225615079365,
              164.94598799342106,
              163.9606272905759
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
            "mean": 2288.814277936118,
            "min": 2269.055635135135,
            "q1": 2282.5591931818185,
            "median": 2283.2790090909093,
            "q3": 2291.943552272727,
            "max": 2317.234,
            "samples": [
              2282.5591931818185,
              2269.055635135135,
              2283.2790090909093,
              2291.943552272727,
              2317.234
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
            "mean": 3244.8133879910115,
            "min": 2365.9832127659574,
            "q1": 2522.8246574307304,
            "median": 3272.5392549019607,
            "q3": 3706.676380073801,
            "max": 4356.0434347826085,
            "samples": [
              4356.0434347826085,
              3706.676380073801,
              3272.5392549019607,
              2522.8246574307304,
              2365.9832127659574
            ],
            "confidence99_9": [
              56.36827407111423,
              6433.258501910908
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
            "mean": 170.87879278387828,
            "min": 170.01695159646738,
            "q1": 170.67565115489128,
            "median": 170.9683054986339,
            "q3": 171.11126383196722,
            "max": 171.6217918374317,
            "samples": [
              170.9683054986339,
              170.01695159646738,
              171.6217918374317,
              170.67565115489128,
              171.11126383196722
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
            "mean": 2368.3316682680893,
            "min": 2353.5189345794392,
            "q1": 2361.728080188679,
            "median": 2367.678570754717,
            "q3": 2374.9651391509437,
            "max": 2383.7676166666665,
            "samples": [
              2367.678570754717,
              2353.5189345794392,
              2383.7676166666665,
              2361.728080188679,
              2374.9651391509437
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
            "mean": 953.7362631379062,
            "min": 708.152525831564,
            "q1": 767.3197837423313,
            "median": 943.1836829727188,
            "q3": 1076.223179377014,
            "max": 1273.8021437659033,
            "samples": [
              1273.8021437659033,
              1076.223179377014,
              943.1836829727188,
              767.3197837423313,
              708.152525831564
            ],
            "confidence99_9": [
              65.95812272954629,
              1841.5144035462663
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
            "mean": 17.493151525091854,
            "min": 17.428989698561946,
            "q1": 17.451838518415176,
            "median": 17.454866507393973,
            "q3": 17.541440098353796,
            "max": 17.588622802734374,
            "samples": [
              17.541440098353796,
              17.451838518415176,
              17.454866507393973,
              17.428989698561946,
              17.588622802734374
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
            "mean": 232.57313291651437,
            "min": 212.42990434966217,
            "q1": 220.62898987676058,
            "median": 223.1838747783688,
            "q3": 247.48947563976378,
            "max": 259.1334199380165,
            "samples": [
              259.1334199380165,
              247.48947563976378,
              212.42990434966217,
              220.62898987676058,
              223.1838747783688
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
            "mean": 2577.430124881783,
            "min": 2019.6120423387097,
            "q1": 2033.2552129817445,
            "median": 2219.041126385809,
            "q3": 3144.742495297806,
            "max": 3470.499747404844,
            "samples": [
              3470.499747404844,
              3144.742495297806,
              2219.041126385809,
              2033.2552129817445,
              2019.6120423387097
            ],
            "confidence99_9": [
              -44.93097670558291,
              5199.791226469149
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
            "mean": 156.28147511846672,
            "min": 154.8378813428218,
            "q1": 155.693338490099,
            "median": 156.1884280631188,
            "q3": 156.98906343750002,
            "max": 157.69866425879397,
            "samples": [
              154.8378813428218,
              155.693338490099,
              156.98906343750002,
              157.69866425879397,
              156.1884280631188
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
            "mean": 4186.613965166795,
            "min": 2338.887859813084,
            "q1": 2341.644168224299,
            "median": 2359.234632075472,
            "q3": 3251.1215551948053,
            "max": 10642.181610526315,
            "samples": [
              10642.181610526315,
              3251.1215551948053,
              2359.234632075472,
              2341.644168224299,
              2338.887859813084
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
            "mean": 3871.31234118571,
            "min": 2844.1748611898015,
            "q1": 3105.797693498452,
            "median": 3360.9314395973156,
            "q3": 4781.866161904762,
            "max": 5263.79154973822,
            "samples": [
              5263.79154973822,
              4781.866161904762,
              3360.9314395973156,
              3105.797693498452,
              2844.1748611898015
            ],
            "confidence99_9": [
              -289.1740453795169,
              8031.798727750936
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
            "mean": 921.3760353612065,
            "min": 918.3814607664234,
            "q1": 918.4964936131387,
            "median": 922.2701415441176,
            "q3": 922.8677205882353,
            "max": 924.8643602941175,
            "samples": [
              922.2701415441176,
              924.8643602941175,
              922.8677205882353,
              918.3814607664234,
              918.4964936131387
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
            "mean": 4546.074512989353,
            "min": 4515.293355855856,
            "q1": 4547.223181818182,
            "median": 4555.174118181818,
            "q3": 4555.97610909091,
            "max": 4556.7058,
            "samples": [
              4515.293355855856,
              4555.97610909091,
              4556.7058,
              4547.223181818182,
              4555.174118181818
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
            "mean": 1286.3109428207026,
            "min": 946.7905269631032,
            "q1": 1019.7940581039755,
            "median": 1222.2682356532357,
            "q3": 1586.3571297468354,
            "max": 1656.3447636363637,
            "samples": [
              1656.3447636363637,
              1586.3571297468354,
              1222.2682356532357,
              946.7905269631032,
              1019.7940581039755
            ],
            "confidence99_9": [
              42.488022470903616,
              2530.1338631705016
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
            "mean": 68.56072307673054,
            "min": 68.45844782608695,
            "q1": 68.5313089364035,
            "median": 68.54626027960526,
            "q3": 68.55304817708333,
            "max": 68.71455016447368,
            "samples": [
              68.54626027960526,
              68.71455016447368,
              68.45844782608695,
              68.5313089364035,
              68.55304817708333
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
            "mean": 604.7373719206529,
            "min": 598.0989113095238,
            "q1": 602.5578870192307,
            "median": 603.2510612980769,
            "q3": 605.8030949519231,
            "max": 613.9759050245098,
            "samples": [
              613.9759050245098,
              598.0989113095238,
              602.5578870192307,
              605.8030949519231,
              603.2510612980769
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
            "mean": 167865.12294285715,
            "min": 154255.3362857143,
            "q1": 154723.9657142857,
            "median": 160852.153,
            "q3": 179022.258,
            "max": 190471.90171428572,
            "samples": [
              154255.3362857143,
              160852.153,
              179022.258,
              154723.9657142857,
              190471.90171428572
            ],
            "confidence99_9": [
              105696.41522179672,
              230033.8306639176
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
            "mean": 4432.025279855612,
            "min": 4414.15478508772,
            "q1": 4423.5385964912275,
            "median": 4425.923367256637,
            "q3": 4437.804460176992,
            "max": 4458.705190265487,
            "samples": [
              4437.804460176992,
              4425.923367256637,
              4458.705190265487,
              4423.5385964912275,
              4414.15478508772
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
            "mean": 46688.13537272727,
            "min": 46354.14327272728,
            "q1": 46571.13495454545,
            "median": 46598.209227272724,
            "q3": 46943.58772727272,
            "max": 46973.60168181818,
            "samples": [
              46973.60168181818,
              46943.58772727272,
              46571.13495454545,
              46354.14327272728,
              46598.209227272724
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
            "mean": 9998.638911773229,
            "min": 9118.7912,
            "q1": 9513.395226415094,
            "median": 10173.82793939394,
            "q3": 10539.028852631578,
            "max": 10648.151340425531,
            "samples": [
              10539.028852631578,
              10173.82793939394,
              9513.395226415094,
              10648.151340425531,
              9118.7912
            ],
            "confidence99_9": [
              7448.642960953444,
              12548.634862593013
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
            "mean": 611.3137758749704,
            "min": 609.7594575242719,
            "q1": 610.4412245145631,
            "median": 611.9204012195122,
            "q3": 612.1610194174757,
            "max": 612.2867766990291,
            "samples": [
              610.4412245145631,
              612.1610194174757,
              612.2867766990291,
              611.9204012195122,
              609.7594575242719
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
            "mean": 7350.479874817518,
            "min": 7325.764656934307,
            "q1": 7338.936729927007,
            "median": 7345.981737226278,
            "q3": 7360.134823529412,
            "max": 7381.581426470588,
            "samples": [
              7381.581426470588,
              7338.936729927007,
              7325.764656934307,
              7345.981737226278,
              7360.134823529412
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
    "id": "37857792347-1",
    "branch": "runtime-seed",
    "commit": {
      "id": "ebfef08ad8049036c9ace865d38217385493b7f2",
      "url": "https://github.com/plug-obp/variohyve/commit/ebfef08ad8049036c9ace865d38217385493b7f2",
      "message": "Implement staged runtime seeds with atomic graph substitution"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37857792347/attempts/1"
  },
  {
    "schema": 1,
    "date": "2026-10-09T12:51:52.605854+00:00",
    "jmh_sha256": "39a0c874b910cb59d56430add208fc288e6637d68bdaa5d1b8be6719e9ee32e0",
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
            "mean": 734.6993595971666,
            "min": 607.8230867192237,
            "q1": 614.0694558282208,
            "median": 627.0151846057572,
            "q3": 867.3561911764706,
            "max": 957.2328796561604,
            "samples": [
              957.2328796561604,
              867.3561911764706,
              614.0694558282208,
              607.8230867192237,
              627.0151846057572
            ],
            "confidence99_9": [
              97.9908554932889,
              1371.4078637010443
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
            "mean": 0.17917868055576552,
            "min": 0.17886311795418725,
            "q1": 0.17887104128118148,
            "median": 0.17907298073573422,
            "q3": 0.179389216729772,
            "max": 0.17969704607795267,
            "samples": [
              0.17886311795418725,
              0.17907298073573422,
              0.17969704607795267,
              0.179389216729772,
              0.17887104128118148
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
            "mean": 1.1739179099485668,
            "min": 1.1693762486049106,
            "q1": 1.1694142415364583,
            "median": 1.1705427734375,
            "q3": 1.1720307547433035,
            "max": 1.1882255314206613,
            "samples": [
              1.1882255314206613,
              1.1705427734375,
              1.1720307547433035,
              1.1693762486049106,
              1.1694142415364583
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1611.7026908211562,
            "min": 1070.3408802139038,
            "q1": 1322.40485997358,
            "median": 1709.3099829351536,
            "q3": 1836.5223546617915,
            "max": 2119.935376321353,
            "samples": [
              2119.935376321353,
              1836.5223546617915,
              1709.3099829351536,
              1322.40485997358,
              1070.3408802139038
            ],
            "confidence99_9": [
              6.467454697296262,
              3216.9379269450164
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
            "mean": 2129.1403954239877,
            "min": 1300.7841285714285,
            "q1": 1532.2025412844037,
            "median": 2169.573665226782,
            "q3": 2627.6708612565444,
            "max": 3015.470780780781,
            "samples": [
              3015.470780780781,
              2627.6708612565444,
              2169.573665226782,
              1532.2025412844037,
              1300.7841285714285
            ],
            "confidence99_9": [
              -646.4353826282713,
              4904.716173476247
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
            "mean": 5728.981134302733,
            "min": 3677.8018970588237,
            "q1": 5223.6528125,
            "median": 5636.070112359551,
            "q3": 6673.975894039735,
            "max": 7433.404955555556,
            "samples": [
              7433.404955555556,
              6673.975894039735,
              5636.070112359551,
              5223.6528125,
              3677.8018970588237
            ],
            "confidence99_9": [
              192.41624985310864,
              11265.546018752357
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
            "mean": 8111.572021976392,
            "min": 4679.457232558139,
            "q1": 6507.738857142857,
            "median": 9295.309277777778,
            "q3": 9466.470679245283,
            "max": 10608.884063157895,
            "samples": [
              10608.884063157895,
              9466.470679245283,
              9295.309277777778,
              6507.738857142857,
              4679.457232558139
            ],
            "confidence99_9": [
              -1286.1381662691238,
              17509.282210221907
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
            "mean": 1659.9849590814113,
            "min": 1069.2865235042734,
            "q1": 1275.690785987261,
            "median": 1708.831957337884,
            "q3": 1899.9288049242425,
            "max": 2346.186723653396,
            "samples": [
              2346.186723653396,
              1899.9288049242425,
              1708.831957337884,
              1275.690785987261,
              1069.2865235042734
            ],
            "confidence99_9": [
              -291.5723212334922,
              3611.5422393963145
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
            "mean": 669.6924782946012,
            "min": 667.5714853723405,
            "q1": 669.1940305851064,
            "median": 669.3644035904255,
            "q3": 670.5942359625668,
            "max": 671.7382359625668,
            "samples": [
              669.3644035904255,
              671.7382359625668,
              670.5942359625668,
              667.5714853723405,
              669.1940305851064
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
            "mean": 1930.412593008794,
            "min": 1901.5473049242423,
            "q1": 1904.4968731060605,
            "median": 1908.7709656488548,
            "q3": 1916.9445572519085,
            "max": 2020.3032641129032,
            "samples": [
              2020.3032641129032,
              1908.7709656488548,
              1904.4968731060605,
              1916.9445572519085,
              1901.5473049242423
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1311.876304665019,
            "min": 975.8958887804878,
            "q1": 1147.9298443935927,
            "median": 1299.4398415584415,
            "q3": 1523.9190790273556,
            "max": 1612.1968695652174,
            "samples": [
              1612.1968695652174,
              1523.9190790273556,
              1299.4398415584415,
              1147.9298443935927,
              975.8958887804878
            ],
            "confidence99_9": [
              302.0994888023987,
              2321.653120527639
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
            "mean": 51.03103333686305,
            "min": 50.67516965725806,
            "q1": 50.8278703327922,
            "median": 50.88080062905844,
            "q3": 50.98509846793831,
            "max": 51.78622759726821,
            "samples": [
              50.98509846793831,
              50.88080062905844,
              50.67516965725806,
              51.78622759726821,
              50.8278703327922
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
            "mean": 299.7796737797619,
            "min": 298.7924178571429,
            "q1": 298.8605976190476,
            "median": 299.55458779761904,
            "q3": 300.69589903846156,
            "max": 300.9948665865384,
            "samples": [
              298.8605976190476,
              300.9948665865384,
              300.69589903846156,
              299.55458779761904,
              298.7924178571429
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 5219.977927148107,
            "min": 3220.080977491961,
            "q1": 3785.5064150943394,
            "median": 5974.671386904762,
            "q3": 6223.673465838509,
            "max": 6895.957390410959,
            "samples": [
              6895.957390410959,
              6223.673465838509,
              5974.671386904762,
              3785.5064150943394,
              3220.080977491961
            ],
            "confidence99_9": [
              -1001.8722409031898,
              11441.828095199402
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
            "mean": 824.7894199394957,
            "min": 821.8677532679739,
            "q1": 823.8106373355263,
            "median": 824.603962993421,
            "q3": 825.2600888157895,
            "max": 828.4046572847682,
            "samples": [
              821.8677532679739,
              824.603962993421,
              825.2600888157895,
              823.8106373355263,
              828.4046572847682
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
            "mean": 4133.822799169726,
            "min": 4090.803150406504,
            "q1": 4110.667159836065,
            "median": 4129.06025,
            "q3": 4163.796727272727,
            "max": 4174.786708333333,
            "samples": [
              4129.06025,
              4090.803150406504,
              4110.667159836065,
              4174.786708333333,
              4163.796727272727
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3935.7507481470057,
            "min": 2696.562908355795,
            "q1": 3141.290667711599,
            "median": 4069.4317287449394,
            "q3": 4400.961938596492,
            "max": 5370.506497326203,
            "samples": [
              5370.506497326203,
              4400.961938596492,
              4069.4317287449394,
              3141.290667711599,
              2696.562908355795
            ],
            "confidence99_9": [
              -130.08500542473303,
              8001.586501718744
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
            "mean": 193.312147012433,
            "min": 191.32209127286586,
            "q1": 193.05654610339505,
            "median": 193.53031577932097,
            "q3": 193.59530054012345,
            "max": 195.05648136645962,
            "samples": [
              191.32209127286586,
              193.53031577932097,
              193.59530054012345,
              195.05648136645962,
              193.05654610339505
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
            "mean": 2522.8963415974436,
            "min": 2504.653725,
            "q1": 2506.0466475,
            "median": 2514.3876959799,
            "q3": 2531.1850782828283,
            "max": 2558.20856122449,
            "samples": [
              2506.0466475,
              2531.1850782828283,
              2514.3876959799,
              2504.653725,
              2558.20856122449
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 689.2144981223554,
            "min": 553.6272512424075,
            "q1": 575.3223887291547,
            "median": 642.9017049390635,
            "q3": 730.72383090379,
            "max": 943.497314797361,
            "samples": [
              943.497314797361,
              730.72383090379,
              575.3223887291547,
              642.9017049390635,
              553.6272512424075
            ],
            "confidence99_9": [
              80.73061850059514,
              1297.6983777441155
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
            "mean": 0.07458646990954529,
            "min": 0.07247764551414633,
            "q1": 0.07475088641712967,
            "median": 0.07509350840250652,
            "q3": 0.0752564213193696,
            "max": 0.07535388789457433,
            "samples": [
              0.07247764551414633,
              0.07475088641712967,
              0.07535388789457433,
              0.0752564213193696,
              0.07509350840250652
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
            "mean": 13.848795052607937,
            "min": 13.696058211319931,
            "q1": 13.722010639750874,
            "median": 13.913223418107268,
            "q3": 13.955625097656249,
            "max": 13.957057896205358,
            "samples": [
              13.955625097656249,
              13.696058211319931,
              13.722010639750874,
              13.913223418107268,
              13.957057896205358
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 707.0520971802028,
            "min": 539.7950064759849,
            "q1": 612.0494440366972,
            "median": 672.9800221923335,
            "q3": 764.0025335365854,
            "max": 946.4334796594135,
            "samples": [
              946.4334796594135,
              764.0025335365854,
              539.7950064759849,
              612.0494440366972,
              672.9800221923335
            ],
            "confidence99_9": [
              102.1572893517249,
              1311.946905008681
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
            "mean": 6.626044513250296,
            "min": 6.605811793971705,
            "q1": 6.615616065772804,
            "median": 6.622262734902872,
            "q3": 6.627607791385135,
            "max": 6.658924180218962,
            "samples": [
              6.615616065772804,
              6.622262734902872,
              6.627607791385135,
              6.658924180218962,
              6.605811793971705
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
            "mean": 227.51298582380878,
            "min": 112.24834991039425,
            "q1": 149.08069092261906,
            "median": 272.41526358695654,
            "q3": 290.1866287615741,
            "max": 313.63399593749995,
            "samples": [
              272.41526358695654,
              290.1866287615741,
              313.63399593749995,
              112.24834991039425,
              149.08069092261906
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1164.7383946515924,
            "min": 826.0202308326463,
            "q1": 976.2509512195122,
            "median": 1144.92024543379,
            "q3": 1396.1746991643454,
            "max": 1480.3258466076695,
            "samples": [
              1480.3258466076695,
              1396.1746991643454,
              1144.92024543379,
              976.2509512195122,
              826.0202308326463
            ],
            "confidence99_9": [
              103.5235752575295,
              2225.9532140456554
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
            "mean": 18.55058790078765,
            "min": 18.282017760660047,
            "q1": 18.28302902307243,
            "median": 18.376997481016353,
            "q3": 18.618165383184525,
            "max": 19.192729856004902,
            "samples": [
              18.282017760660047,
              18.618165383184525,
              18.376997481016353,
              19.192729856004902,
              18.28302902307243
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
            "mean": 223.93121502392515,
            "min": 221.9028714539007,
            "q1": 222.5533051861702,
            "median": 223.78923928571427,
            "q3": 224.471921875,
            "max": 226.93873731884057,
            "samples": [
              222.5533051861702,
              224.471921875,
              226.93873731884057,
              223.78923928571427,
              221.9028714539007
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3529.1603043253845,
            "min": 2180.835547826087,
            "q1": 2704.358331536388,
            "median": 3952.006440944882,
            "q3": 4028.6060441767067,
            "max": 4779.995157142857,
            "samples": [
              4779.995157142857,
              4028.6060441767067,
              3952.006440944882,
              2704.358331536388,
              2180.835547826087
            ],
            "confidence99_9": [
              -551.0283520272496,
              7609.348960678019
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
            "mean": 162.22259768970548,
            "min": 159.93812005739795,
            "q1": 160.0968348214286,
            "median": 160.22926403061226,
            "q3": 160.70596009615383,
            "max": 170.14280944293478,
            "samples": [
              160.0968348214286,
              160.22926403061226,
              170.14280944293478,
              160.70596009615383,
              159.93812005739795
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
            "mean": 2428.6105907160195,
            "min": 2414.561375,
            "q1": 2418.51315625,
            "median": 2431.7614368932036,
            "q3": 2438.695781553398,
            "max": 2439.521203883495,
            "samples": [
              2418.51315625,
              2431.7614368932036,
              2438.695781553398,
              2414.561375,
              2439.521203883495
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1366.0129191052497,
            "min": 922.9526014760147,
            "q1": 1214.621220338983,
            "median": 1369.4834062927496,
            "q3": 1512.643735649547,
            "max": 1810.3636317689532,
            "samples": [
              1810.3636317689532,
              1512.643735649547,
              1369.4834062927496,
              1214.621220338983,
              922.9526014760147
            ],
            "confidence99_9": [
              91.53981255095482,
              2640.486025659545
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
            "mean": 28.33289407185722,
            "min": 28.182115023606116,
            "q1": 28.26131235948741,
            "median": 28.272732464028778,
            "q3": 28.424104364809782,
            "max": 28.524206147354015,
            "samples": [
              28.182115023606116,
              28.26131235948741,
              28.272732464028778,
              28.524206147354015,
              28.424104364809782
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
            "mean": 297.03615041504787,
            "min": 293.4185753504673,
            "q1": 294.8226975235849,
            "median": 296.4958513033175,
            "q3": 298.3983318452381,
            "max": 302.04529605263156,
            "samples": [
              298.3983318452381,
              293.4185753504673,
              302.04529605263156,
              296.4958513033175,
              294.8226975235849
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1930.828850311265,
            "min": 955.1179228571428,
            "q1": 1328.325118193891,
            "median": 1925.4339481765835,
            "q3": 2554.8692882653063,
            "max": 2890.3979740634004,
            "samples": [
              2890.3979740634004,
              2554.8692882653063,
              1925.4339481765835,
              1328.325118193891,
              955.1179228571428
            ],
            "confidence99_9": [
              -1188.698407295994,
              5050.356107918524
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
            "mean": 34.521843691657935,
            "min": 34.40294267406799,
            "q1": 34.46628481359649,
            "median": 34.48350387198465,
            "q3": 34.49503988486842,
            "max": 34.76144721377212,
            "samples": [
              34.40294267406799,
              34.48350387198465,
              34.46628481359649,
              34.76144721377212,
              34.49503988486842
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
            "mean": 369.478820181818,
            "min": 364.62326494169093,
            "q1": 368.05041985294116,
            "median": 368.81832169117644,
            "q3": 368.8685033088235,
            "max": 377.0335911144578,
            "samples": [
              368.05041985294116,
              377.0335911144578,
              368.81832169117644,
              364.62326494169093,
              368.8685033088235
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 4838.406553250635,
            "min": 2748.3720273972604,
            "q1": 3896.75946692607,
            "median": 4857.3896165048545,
            "q3": 5433.515735135135,
            "max": 7255.995920289855,
            "samples": [
              7255.995920289855,
              5433.515735135135,
              4857.3896165048545,
              3896.75946692607,
              2748.3720273972604
            ],
            "confidence99_9": [
              -1677.6627272827382,
              11354.475833784007
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
            "mean": 168.61203109996222,
            "min": 167.247409592246,
            "q1": 167.351088736631,
            "median": 167.9496622660428,
            "q3": 169.89597809103262,
            "max": 170.6160168138587,
            "samples": [
              169.89597809103262,
              170.6160168138587,
              167.9496622660428,
              167.247409592246,
              167.351088736631
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
            "mean": 2374.9881609838276,
            "min": 2368.073641509434,
            "q1": 2368.996375,
            "median": 2371.90925,
            "q3": 2378.952716981132,
            "max": 2387.0088214285715,
            "samples": [
              2387.0088214285715,
              2378.952716981132,
              2371.90925,
              2368.073641509434,
              2368.996375
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 4388.177325696032,
            "min": 2910.063889534884,
            "q1": 3326.5205747508307,
            "median": 4511.972707207207,
            "q3": 5305.033121693122,
            "max": 5887.296335294118,
            "samples": [
              5887.296335294118,
              5305.033121693122,
              4511.972707207207,
              3326.5205747508307,
              2910.063889534884
            ],
            "confidence99_9": [
              -488.34131357719525,
              9264.69596496926
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
            "mean": 173.50757309462674,
            "min": 172.5426042239011,
            "q1": 173.49244388812156,
            "median": 173.76786666666666,
            "q3": 173.86601684027775,
            "max": 173.86893385416667,
            "samples": [
              173.76786666666666,
              173.49244388812156,
              173.86893385416667,
              173.86601684027775,
              172.5426042239011
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
            "mean": 2476.5876788797227,
            "min": 2446.603174757282,
            "q1": 2460.67631372549,
            "median": 2477.940621287129,
            "q3": 2480.362787128713,
            "max": 2517.3554975,
            "samples": [
              2477.940621287129,
              2460.67631372549,
              2446.603174757282,
              2517.3554975,
              2480.362787128713
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1130.748477213911,
            "min": 730.007003646973,
            "q1": 1036.8018738366081,
            "median": 1152.7791910241658,
            "q3": 1282.3147161125319,
            "max": 1451.8396014492753,
            "samples": [
              1451.8396014492753,
              1282.3147161125319,
              1152.7791910241658,
              1036.8018738366081,
              730.007003646973
            ],
            "confidence99_9": [
              83.30098981037395,
              2178.195964617448
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
            "mean": 17.86258219428786,
            "min": 17.690969383445946,
            "q1": 17.724274589002267,
            "median": 17.762448259943184,
            "q3": 17.789848046874997,
            "max": 18.3453706921729,
            "samples": [
              17.724274589002267,
              17.690969383445946,
              17.789848046874997,
              17.762448259943184,
              18.3453706921729
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
            "mean": 219.23708951425567,
            "min": 217.80321354166665,
            "q1": 218.14319162326387,
            "median": 218.41684852430555,
            "q3": 220.67683230633804,
            "max": 221.14536157570421,
            "samples": [
              220.67683230633804,
              217.80321354166665,
              221.14536157570421,
              218.41684852430555,
              218.14319162326387
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3395.8914183383795,
            "min": 2230.476004454343,
            "q1": 2714.589243902439,
            "median": 3299.397065789474,
            "q3": 3969.4264584980237,
            "max": 4765.568319047619,
            "samples": [
              4765.568319047619,
              3969.4264584980237,
              3299.397065789474,
              2714.589243902439,
              2230.476004454343
            ],
            "confidence99_9": [
              -472.34545618082757,
              7264.1282928575865
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
            "mean": 160.03502958368614,
            "min": 158.93336167512692,
            "q1": 159.9327681760204,
            "median": 159.94685204081634,
            "q3": 160.2606033653846,
            "max": 161.10156266108248,
            "samples": [
              160.2606033653846,
              158.93336167512692,
              159.9327681760204,
              161.10156266108248,
              159.94685204081634
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
            "mean": 2408.0344810364145,
            "min": 2389.0064880952377,
            "q1": 2389.59195,
            "median": 2399.796285714286,
            "q3": 2400.1735833333337,
            "max": 2461.604098039216,
            "samples": [
              2399.796285714286,
              2400.1735833333337,
              2389.0064880952377,
              2461.604098039216,
              2389.59195
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 5257.964054633759,
            "min": 3164.135716088328,
            "q1": 3885.4624341085273,
            "median": 5919.737929824561,
            "q3": 6397.752082802548,
            "max": 6922.732110344828,
            "samples": [
              6922.732110344828,
              6397.752082802548,
              5919.737929824561,
              3885.4624341085273,
              3164.135716088328
            ],
            "confidence99_9": [
              -1062.3703006289106,
              11578.298409896428
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
            "mean": 935.5490243200665,
            "min": 930.5617611111112,
            "q1": 931.3275694444445,
            "median": 935.4767182835822,
            "q3": 939.0223246268657,
            "max": 941.3567481343284,
            "samples": [
              930.5617611111112,
              931.3275694444445,
              935.4767182835822,
              941.3567481343284,
              939.0223246268657
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
            "mean": 4626.3507933741075,
            "min": 4611.000871559633,
            "q1": 4614.585307339449,
            "median": 4625.361894495412,
            "q3": 4626.6645045871555,
            "max": 4654.141388888889,
            "samples": [
              4611.000871559633,
              4614.585307339449,
              4625.361894495412,
              4654.141388888889,
              4626.6645045871555
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1830.2142619972487,
            "min": 1257.0472035175878,
            "q1": 1769.8615537918872,
            "median": 1774.5363528368794,
            "q3": 1952.6212548638132,
            "max": 2397.0049449760763,
            "samples": [
              2397.0049449760763,
              1952.6212548638132,
              1769.8615537918872,
              1774.5363528368794,
              1257.0472035175878
            ],
            "confidence99_9": [
              252.50940910080726,
              3407.91911489369
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
            "mean": 72.80873080150464,
            "min": 72.63741558159722,
            "q1": 72.72597157118057,
            "median": 72.81386385995371,
            "q3": 72.88883933738425,
            "max": 72.9775636574074,
            "samples": [
              72.63741558159722,
              72.81386385995371,
              72.88883933738425,
              72.72597157118057,
              72.9775636574074
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
            "mean": 640.4805348464421,
            "min": 636.1741856060605,
            "q1": 639.1346568877551,
            "median": 639.1636530612245,
            "q3": 639.2147551020408,
            "max": 648.7154235751294,
            "samples": [
              639.1636530612245,
              639.1346568877551,
              636.1741856060605,
              639.2147551020408,
              648.7154235751294
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 213335.84257333336,
            "min": 179676.92966666666,
            "q1": 210939.4968,
            "median": 218490.3456,
            "q3": 225753.6056,
            "max": 231818.8352,
            "samples": [
              231818.8352,
              218490.3456,
              179676.92966666666,
              225753.6056,
              210939.4968
            ],
            "confidence99_9": [
              134867.3234810342,
              291804.3616656325
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
            "mean": 4504.716460794723,
            "min": 4490.055004464285,
            "q1": 4494.1375178571425,
            "median": 4498.382236607143,
            "q3": 4517.993986486486,
            "max": 4523.0135585585585,
            "samples": [
              4517.993986486486,
              4494.1375178571425,
              4498.382236607143,
              4523.0135585585585,
              4490.055004464285
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
            "mean": 47120.5394,
            "min": 46914.45345454545,
            "q1": 46959.82072727272,
            "median": 47053.92018181818,
            "q3": 47200.91863636363,
            "max": 47473.584,
            "samples": [
              46959.82072727272,
              46914.45345454545,
              47200.91863636363,
              47053.92018181818,
              47473.584
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 12985.988016855516,
            "min": 10678.114670212766,
            "q1": 12566.8492,
            "median": 12699.222430379747,
            "q3": 13219.762064935065,
            "max": 15765.99171875,
            "samples": [
              15765.99171875,
              12699.222430379747,
              12566.8492,
              10678.114670212766,
              13219.762064935065
            ],
            "confidence99_9": [
              5946.767062704106,
              20025.208971006927
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
            "mean": 630.000686679147,
            "min": 627.2843081249999,
            "q1": 628.01090875,
            "median": 630.2270288944724,
            "q3": 631.4797375,
            "max": 633.0014501262626,
            "samples": [
              628.01090875,
              630.2270288944724,
              633.0014501262626,
              627.2843081249999,
              631.4797375
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
            "mean": 7722.836661404998,
            "min": 7580.902083333333,
            "q1": 7654.707015267176,
            "median": 7681.975702290077,
            "q3": 7803.443860465116,
            "max": 7893.154645669291,
            "samples": [
              7580.902083333333,
              7803.443860465116,
              7893.154645669291,
              7654.707015267176,
              7681.975702290077
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 12:48:58 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
    "id": "37931604655-1",
    "branch": "codex/learn-variohyve-slice-plan",
    "commit": {
      "id": "12429f577290a038908b5f1e96f1b596b4036e1a",
      "url": "https://github.com/plug-obp/variohyve/commit/12429f577290a038908b5f1e96f1b596b4036e1a",
      "message": "test: validate and package the complete starter journey"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37931604655/attempts/1"
  },
  {
    "schema": 1,
    "date": "2026-10-09T14:29:40.653662+00:00",
    "jmh_sha256": "11421dba41ecd8eb9f9f3d93ede693321429c6ef5b1b91bce59f0a7df215d117",
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
            "mean": 738.3072632059032,
            "min": 572.6432701774471,
            "q1": 612.1331553516819,
            "median": 615.3169152334152,
            "q3": 832.3673477537437,
            "max": 1059.0756275132276,
            "samples": [
              1059.0756275132276,
              832.3673477537437,
              615.3169152334152,
              572.6432701774471,
              612.1331553516819
            ],
            "confidence99_9": [
              -56.06185035100964,
              1532.6763767628158
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
            "mean": 0.1819949043318992,
            "min": 0.18074717685315736,
            "q1": 0.18082482368424094,
            "median": 0.1808991105119152,
            "q3": 0.18234900701613654,
            "max": 0.18515440359404592,
            "samples": [
              0.18515440359404592,
              0.18234900701613654,
              0.1808991105119152,
              0.18082482368424094,
              0.18074717685315736
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
            "mean": 1.1718878933343448,
            "min": 1.1510458528037384,
            "q1": 1.1633818510509673,
            "median": 1.1741568791316106,
            "q3": 1.1816846513014574,
            "max": 1.1891702323839501,
            "samples": [
              1.1741568791316106,
              1.1891702323839501,
              1.1633818510509673,
              1.1816846513014574,
              1.1510458528037384
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1596.4923103419214,
            "min": 1017.4163648373984,
            "q1": 1372.654927297668,
            "median": 1659.5186495867767,
            "q3": 1788.0935928571428,
            "max": 2144.778017130621,
            "samples": [
              2144.778017130621,
              1788.0935928571428,
              1659.5186495867767,
              1372.654927297668,
              1017.4163648373984
            ],
            "confidence99_9": [
              -44.81808424347423,
              3237.802704927317
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
            "mean": 2020.8525521134566,
            "min": 1260.7501473551638,
            "q1": 1458.3963595342068,
            "median": 2149.9108283261803,
            "q3": 2387.2391952380954,
            "max": 2847.9662301136364,
            "samples": [
              2847.9662301136364,
              2387.2391952380954,
              2149.9108283261803,
              1458.3963595342068,
              1260.7501473551638
            ],
            "confidence99_9": [
              -510.87253697044025,
              4552.577641197353
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
            "mean": 5310.361258025845,
            "min": 3208.088557692308,
            "q1": 4110.423204918033,
            "median": 5614.210463687151,
            "q3": 6397.971229299363,
            "max": 7221.112834532374,
            "samples": [
              7221.112834532374,
              6397.971229299363,
              5614.210463687151,
              4110.423204918033,
              3208.088557692308
            ],
            "confidence99_9": [
              -1012.6707986285646,
              11633.393314680256
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
            "mean": 7119.793403910185,
            "min": 4586.771744292238,
            "q1": 5423.768311827957,
            "median": 7400.996095588235,
            "q3": 8729.55455652174,
            "max": 9457.876311320755,
            "samples": [
              9457.876311320755,
              8729.55455652174,
              7400.996095588235,
              5423.768311827957,
              4586.771744292238
            ],
            "confidence99_9": [
              -918.2211441908648,
              15157.807952011233
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
            "mean": 1666.426948844397,
            "min": 1027.4081293634497,
            "q1": 1389.0275464632455,
            "median": 1678.6719381270902,
            "q3": 1917.3846858237548,
            "max": 2319.6424444444447,
            "samples": [
              2319.6424444444447,
              1917.3846858237548,
              1678.6719381270902,
              1389.0275464632455,
              1027.4081293634497
            ],
            "confidence99_9": [
              -234.78895000247167,
              3567.6428476912656
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
            "mean": 682.1509154314189,
            "min": 677.1819412162162,
            "q1": 679.5598953804348,
            "median": 679.6815067934783,
            "q3": 681.3311460597826,
            "max": 693.0000877071823,
            "samples": [
              679.6815067934783,
              677.1819412162162,
              679.5598953804348,
              681.3311460597826,
              693.0000877071823
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
            "mean": 1908.5355643117898,
            "min": 1904.4504106463878,
            "q1": 1906.4805227272727,
            "median": 1908.1771477272728,
            "q3": 1909.5173740458015,
            "max": 1914.0523664122138,
            "samples": [
              1914.0523664122138,
              1904.4504106463878,
              1906.4805227272727,
              1909.5173740458015,
              1908.1771477272728
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1248.3779702694337,
            "min": 937.840725398313,
            "q1": 1072.2370171489817,
            "median": 1273.3119351969503,
            "q3": 1385.0961908713693,
            "max": 1573.4039827315542,
            "samples": [
              1573.4039827315542,
              1385.0961908713693,
              1273.3119351969503,
              1072.2370171489817,
              937.840725398313
            ],
            "confidence99_9": [
              281.0794704607156,
              2215.676470078152
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
            "mean": 50.967940999292615,
            "min": 50.65051255040323,
            "q1": 50.961353896103894,
            "median": 51.02777216923701,
            "q3": 51.093377961601306,
            "max": 51.10668841911765,
            "samples": [
              50.961353896103894,
              50.65051255040323,
              51.10668841911765,
              51.02777216923701,
              51.093377961601306
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
            "mean": 317.7076607500008,
            "min": 310.9977787747525,
            "q1": 312.7348371875,
            "median": 316.57136994949497,
            "q3": 324.06815721649485,
            "max": 324.16616062176166,
            "samples": [
              310.9977787747525,
              312.7348371875,
              324.06815721649485,
              316.57136994949497,
              324.16616062176166
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 4737.904762057929,
            "min": 3241.4058834951456,
            "q1": 3451.1401413793105,
            "median": 4774.948995238095,
            "q3": 5823.455121387283,
            "max": 6398.573668789809,
            "samples": [
              6398.573668789809,
              5823.455121387283,
              4774.948995238095,
              3451.1401413793105,
              3241.4058834951456
            ],
            "confidence99_9": [
              -650.5500467624115,
              10126.359570878269
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
            "mean": 836.3314143222958,
            "min": 832.5445082781457,
            "q1": 834.8368266666666,
            "median": 837.548275,
            "q3": 838.1375266666666,
            "max": 838.5899350000001,
            "samples": [
              832.5445082781457,
              838.5899350000001,
              838.1375266666666,
              834.8368266666666,
              837.548275
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
            "mean": 4082.427132605775,
            "min": 4045.1611330645164,
            "q1": 4056.4640725806453,
            "median": 4083.58812195122,
            "q3": 4094.6750772357723,
            "max": 4132.247258196721,
            "samples": [
              4132.247258196721,
              4083.58812195122,
              4056.4640725806453,
              4045.1611330645164,
              4094.6750772357723
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3906.0052022871446,
            "min": 2472.129962962963,
            "q1": 3148.544514106583,
            "median": 4314.124356223176,
            "q3": 4497.155650224216,
            "max": 5098.071527918782,
            "samples": [
              5098.071527918782,
              4497.155650224216,
              4314.124356223176,
              3148.544514106583,
              2472.129962962963
            ],
            "confidence99_9": [
              -208.4159964420801,
              8020.42640101637
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
            "mean": 196.5109663706117,
            "min": 195.17309277950312,
            "q1": 196.0139248046875,
            "median": 196.54757586477987,
            "q3": 197.18797739779873,
            "max": 197.6322610062893,
            "samples": [
              196.54757586477987,
              197.6322610062893,
              196.0139248046875,
              197.18797739779873,
              195.17309277950312
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
            "mean": 2473.7924982187924,
            "min": 2455.9801102941174,
            "q1": 2468.1477916666663,
            "median": 2471.9002475490197,
            "q3": 2481.622727722772,
            "max": 2491.3116138613864,
            "samples": [
              2481.622727722772,
              2468.1477916666663,
              2471.9002475490197,
              2491.3116138613864,
              2455.9801102941174
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 697.4501031482432,
            "min": 575.3824686601495,
            "q1": 576.7699769452449,
            "median": 620.2999077970297,
            "q3": 764.7439885496183,
            "max": 950.0541737891738,
            "samples": [
              950.0541737891738,
              764.7439885496183,
              575.3824686601495,
              620.2999077970297,
              576.7699769452449
            ],
            "confidence99_9": [
              77.28827847102457,
              1317.6119278254619
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
            "mean": 0.07474638158281821,
            "min": 0.07247687746443839,
            "q1": 0.07484432325176163,
            "median": 0.07516156320010914,
            "q3": 0.07526700584561218,
            "max": 0.07598213815216971,
            "samples": [
              0.07598213815216971,
              0.07526700584561218,
              0.07484432325176163,
              0.07247687746443839,
              0.07516156320010914
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
            "mean": 14.757823460448188,
            "min": 10.932036749301677,
            "q1": 15.469371785802165,
            "median": 15.702054281250001,
            "q3": 15.84016919732863,
            "max": 15.845485288558468,
            "samples": [
              15.845485288558468,
              15.84016919732863,
              15.469371785802165,
              15.702054281250001,
              10.932036749301677
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 797.9780324415703,
            "min": 619.1694412128713,
            "q1": 650.769478204294,
            "median": 767.3028105828221,
            "q3": 906.7826157323689,
            "max": 1045.8658164754952,
            "samples": [
              1045.8658164754952,
              906.7826157323689,
              767.3028105828221,
              650.769478204294,
              619.1694412128713
            ],
            "confidence99_9": [
              109.50209014757036,
              1486.4539747355702
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
            "mean": 6.712788189380696,
            "min": 6.618474945893159,
            "q1": 6.623284496410474,
            "median": 6.637958397117821,
            "q3": 6.7159710643193495,
            "max": 6.9682520431626775,
            "samples": [
              6.618474945893159,
              6.623284496410474,
              6.637958397117821,
              6.9682520431626775,
              6.7159710643193495
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
            "mean": 259.56331969804546,
            "min": 127.27480551321138,
            "q1": 275.2699432565789,
            "median": 288.2537698732719,
            "q3": 296.45954333726417,
            "max": 310.558536509901,
            "samples": [
              275.2699432565789,
              296.45954333726417,
              310.558536509901,
              288.2537698732719,
              127.27480551321138
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1077.1702991369034,
            "min": 741.2783185185185,
            "q1": 928.680172541744,
            "median": 1123.927745515695,
            "q3": 1234.5531356350184,
            "max": 1357.4121234735414,
            "samples": [
              1357.4121234735414,
              1234.5531356350184,
              1123.927745515695,
              928.680172541744,
              741.2783185185185
            ],
            "confidence99_9": [
              133.24434208375055,
              2021.0962561900562
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
            "mean": 18.60277030666665,
            "min": 18.541814129146918,
            "q1": 18.58368388856132,
            "median": 18.624634728422617,
            "q3": 18.628496633184525,
            "max": 18.635222154017857,
            "samples": [
              18.541814129146918,
              18.628496633184525,
              18.624634728422617,
              18.635222154017857,
              18.58368388856132
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
            "mean": 252.3341962099293,
            "min": 240.1043594942748,
            "q1": 246.65942273622048,
            "median": 250.46129675,
            "q3": 258.041646772541,
            "max": 266.4042552966102,
            "samples": [
              246.65942273622048,
              250.46129675,
              258.041646772541,
              266.4042552966102,
              240.1043594942748
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3237.7865176685455,
            "min": 2289.4776659038903,
            "q1": 2532.8584217171715,
            "median": 3343.90884,
            "q3": 3710.895785185185,
            "max": 4311.791875536481,
            "samples": [
              4311.791875536481,
              3710.895785185185,
              3343.90884,
              2532.8584217171715,
              2289.4776659038903
            ],
            "confidence99_9": [
              24.865932908453033,
              6450.707102428638
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
            "mean": 162.70661711196772,
            "min": 161.03642788461536,
            "q1": 161.4226067976804,
            "median": 163.2833937174479,
            "q3": 163.578482421875,
            "max": 164.2121747382199,
            "samples": [
              161.4226067976804,
              164.2121747382199,
              163.578482421875,
              163.2833937174479,
              161.03642788461536
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
            "mean": 2369.16334245283,
            "min": 2361.0033561320756,
            "q1": 2369.204047169811,
            "median": 2369.5194575471696,
            "q3": 2370.4467853773585,
            "max": 2375.643066037736,
            "samples": [
              2370.4467853773585,
              2361.0033561320756,
              2369.204047169811,
              2375.643066037736,
              2369.5194575471696
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1416.1685787646963,
            "min": 1070.5021980728052,
            "q1": 1294.4352622739018,
            "median": 1391.493745479833,
            "q3": 1534.796262996942,
            "max": 1789.615425,
            "samples": [
              1789.615425,
              1534.796262996942,
              1391.493745479833,
              1294.4352622739018,
              1070.5021980728052
            ],
            "confidence99_9": [
              382.1287703705884,
              2450.2083871588043
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
            "mean": 28.324445147627436,
            "min": 28.19341698516187,
            "q1": 28.20885836330935,
            "median": 28.2661956216277,
            "q3": 28.390772560009058,
            "max": 28.562982208029197,
            "samples": [
              28.390772560009058,
              28.19341698516187,
              28.2661956216277,
              28.20885836330935,
              28.562982208029197
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
            "mean": 343.5937712120679,
            "min": 288.7372180299539,
            "q1": 335.09591711229945,
            "median": 349.47367108938545,
            "q3": 366.6616706871345,
            "max": 378.00037914156627,
            "samples": [
              335.09591711229945,
              349.47367108938545,
              366.6616706871345,
              378.00037914156627,
              288.7372180299539
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1591.2038681630825,
            "min": 1036.4769192546585,
            "q1": 1323.8421256613756,
            "median": 1584.7576192733018,
            "q3": 1807.9513513513514,
            "max": 2202.991325274725,
            "samples": [
              2202.991325274725,
              1807.9513513513514,
              1584.7576192733018,
              1323.8421256613756,
              1036.4769192546585
            ],
            "confidence99_9": [
              -131.4044146669396,
              3313.8121509931043
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
            "mean": 34.75328932435702,
            "min": 34.66462192339601,
            "q1": 34.703375933351765,
            "median": 34.720598589601764,
            "q3": 34.78876472621682,
            "max": 34.88908544921875,
            "samples": [
              34.88908544921875,
              34.78876472621682,
              34.66462192339601,
              34.720598589601764,
              34.703375933351765
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
            "mean": 412.7962476979798,
            "min": 391.764761328125,
            "q1": 408.70760294117645,
            "median": 418.01091375,
            "q3": 419.4722491610738,
            "max": 426.0257113095238,
            "samples": [
              391.764761328125,
              419.4722491610738,
              408.70760294117645,
              418.01091375,
              426.0257113095238
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3936.9852080479745,
            "min": 2628.825624671916,
            "q1": 2903.1333594202897,
            "median": 4301.297261802575,
            "q3": 4531.917027149321,
            "max": 5319.752767195767,
            "samples": [
              5319.752767195767,
              4531.917027149321,
              4301.297261802575,
              2903.1333594202897,
              2628.825624671916
            ],
            "confidence99_9": [
              -444.4843326705645,
              8318.454748766513
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
            "mean": 171.17439029049592,
            "min": 166.1394007936508,
            "q1": 166.1768761574074,
            "median": 169.75811993243244,
            "q3": 172.67558166436464,
            "max": 181.12197290462427,
            "samples": [
              181.12197290462427,
              166.1768761574074,
              166.1394007936508,
              169.75811993243244,
              172.67558166436464
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
            "mean": 2327.0551421296295,
            "min": 2319.436347222222,
            "q1": 2323.982622685185,
            "median": 2329.0312083333333,
            "q3": 2330.9457337962963,
            "max": 2331.879798611111,
            "samples": [
              2323.982622685185,
              2319.436347222222,
              2331.879798611111,
              2329.0312083333333,
              2330.9457337962963
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 4533.6524965452945,
            "min": 2593.2796424870467,
            "q1": 3536.8831549295774,
            "median": 4700.766638497653,
            "q3": 5415.504437837838,
            "max": 6421.828608974359,
            "samples": [
              6421.828608974359,
              5415.504437837838,
              4700.766638497653,
              3536.8831549295774,
              2593.2796424870467
            ],
            "confidence99_9": [
              -1283.6863756454404,
              10350.99136873603
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
            "mean": 174.55777236131686,
            "min": 173.20079627071826,
            "q1": 173.55876208563535,
            "median": 174.69207960893854,
            "q3": 175.57703967696628,
            "max": 175.76018416432586,
            "samples": [
              175.57703967696628,
              173.20079627071826,
              173.55876208563535,
              175.76018416432586,
              174.69207960893854
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
            "mean": 2414.3113752857944,
            "min": 2396.777528571429,
            "q1": 2412.582550480769,
            "median": 2412.895971153846,
            "q3": 2419.6776490384614,
            "max": 2429.623177184466,
            "samples": [
              2396.777528571429,
              2429.623177184466,
              2412.582550480769,
              2412.895971153846,
              2419.6776490384614
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1218.1914478435388,
            "min": 918.6311071428571,
            "q1": 1080.0916932185146,
            "median": 1238.9116373762376,
            "q3": 1307.8272806788511,
            "max": 1545.4955208012327,
            "samples": [
              1545.4955208012327,
              1307.8272806788511,
              1238.9116373762376,
              1080.0916932185146,
              918.6311071428571
            ],
            "confidence99_9": [
              306.14994227134,
              2130.2329534157375
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
            "mean": 18.348692243001206,
            "min": 17.93794696100917,
            "q1": 18.105665346498842,
            "median": 18.152324670862267,
            "q3": 18.62282899925595,
            "max": 18.924695237379808,
            "samples": [
              18.62282899925595,
              18.924695237379808,
              18.105665346498842,
              18.152324670862267,
              17.93794696100917
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
            "mean": 235.43886129643838,
            "min": 220.81780567781692,
            "q1": 222.94874335106383,
            "median": 226.1802576438849,
            "q3": 251.08713275,
            "max": 256.1603670594262,
            "samples": [
              256.1603670594262,
              251.08713275,
              220.81780567781692,
              222.94874335106383,
              226.1802576438849
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 3252.8886562510597,
            "min": 2207.0042356828194,
            "q1": 2421.5421618357486,
            "median": 3539.1790247349822,
            "q3": 3697.7137011070113,
            "max": 4399.004157894737,
            "samples": [
              4399.004157894737,
              3697.7137011070113,
              3539.1790247349822,
              2421.5421618357486,
              2207.0042356828194
            ],
            "confidence99_9": [
              -285.94710253419,
              6791.724415036309
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
            "mean": 159.1052087871766,
            "min": 157.45854703125,
            "q1": 158.0882720959596,
            "median": 159.5422889030612,
            "q3": 159.67621938775508,
            "max": 160.76071651785713,
            "samples": [
              158.0882720959596,
              159.5422889030612,
              160.76071651785713,
              159.67621938775508,
              157.45854703125
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
            "mean": 2428.128353022401,
            "min": 2364.2770943396226,
            "q1": 2377.8285094339626,
            "median": 2389.8479857142856,
            "q3": 2437.8459077669904,
            "max": 2570.842267857143,
            "samples": [
              2364.2770943396226,
              2437.8459077669904,
              2377.8285094339626,
              2389.8479857142856,
              2570.842267857143
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 5169.3678553253785,
            "min": 3111.161158385093,
            "q1": 3883.712096899225,
            "median": 5724.30908,
            "q3": 6310.087635220126,
            "max": 6817.569306122449,
            "samples": [
              6817.569306122449,
              6310.087635220126,
              5724.30908,
              3883.712096899225,
              3111.161158385093
            ],
            "confidence99_9": [
              -984.1054007920175,
              11322.841111442774
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
            "mean": 942.2004985781721,
            "min": 926.1657305555556,
            "q1": 928.471762037037,
            "median": 930.3632907407407,
            "q3": 939.4290373134328,
            "max": 986.5726722440945,
            "samples": [
              926.1657305555556,
              986.5726722440945,
              930.3632907407407,
              928.471762037037,
              939.4290373134328
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
            "mean": 4564.016938570751,
            "min": 4496.3832276785715,
            "q1": 4525.021725225225,
            "median": 4563.259845454546,
            "q3": 4610.024486238532,
            "max": 4625.395408256881,
            "samples": [
              4610.024486238532,
              4625.395408256881,
              4525.021725225225,
              4563.259845454546,
              4496.3832276785715
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 1783.9099867986738,
            "min": 1178.2576230859836,
            "q1": 1724.5426120689656,
            "median": 1752.9570858143609,
            "q3": 1900.7258842504743,
            "max": 2363.066728773585,
            "samples": [
              2363.066728773585,
              1900.7258842504743,
              1752.9570858143609,
              1724.5426120689656,
              1178.2576230859836
            ],
            "confidence99_9": [
              149.80513281871822,
              3418.014840778629
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
            "mean": 73.62403268217686,
            "min": 73.10081702686917,
            "q1": 73.52516026577104,
            "median": 73.6264042786215,
            "q3": 73.75317880306604,
            "max": 74.1146030365566,
            "samples": [
              73.10081702686917,
              73.52516026577104,
              74.1146030365566,
              73.6264042786215,
              73.75317880306604
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
            "mean": 632.4419900303792,
            "min": 619.7341967821783,
            "q1": 622.690968440594,
            "median": 625.102433125,
            "q3": 646.6747152061856,
            "max": 648.0076365979381,
            "samples": [
              646.6747152061856,
              625.102433125,
              619.7341967821783,
              648.0076365979381,
              622.690968440594
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 192654.5786533333,
            "min": 172961.24,
            "q1": 187348.20716666666,
            "median": 189416.4665,
            "q3": 200731.2154,
            "max": 212815.7642,
            "samples": [
              200731.2154,
              187348.20716666666,
              172961.24,
              212815.7642,
              189416.4665
            ],
            "confidence99_9": [
              134953.47920534783,
              250355.67810131877
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
            "mean": 4529.212289566482,
            "min": 4496.8712589285715,
            "q1": 4525.219364864865,
            "median": 4539.837887387387,
            "q3": 4540.37485520362,
            "max": 4543.758081447963,
            "samples": [
              4525.219364864865,
              4540.37485520362,
              4543.758081447963,
              4496.8712589285715,
              4539.837887387387
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
            "mean": 46058.11705454545,
            "min": 45737.809,
            "q1": 45827.97981818182,
            "median": 46017.59940909091,
            "q3": 46269.06763636363,
            "max": 46438.12940909091,
            "samples": [
              45737.809,
              45827.97981818182,
              46438.12940909091,
              46017.59940909091,
              46269.06763636363
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
            "mean": 12573.829138732905,
            "min": 10588.99047368421,
            "q1": 11347.226123595505,
            "median": 11778.83234117647,
            "q3": 13371.398333333333,
            "max": 15782.698421875,
            "samples": [
              15782.698421875,
              13371.398333333333,
              11347.226123595505,
              11778.83234117647,
              10588.99047368421
            ],
            "confidence99_9": [
              4633.3947148023135,
              20514.263562663495
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
            "mean": 639.0504390246261,
            "min": 634.2156306818182,
            "q1": 636.3963661616161,
            "median": 641.0518512820513,
            "q3": 641.6533865384615,
            "max": 641.9349604591837,
            "samples": [
              641.9349604591837,
              641.6533865384615,
              641.0518512820513,
              636.3963661616161,
              634.2156306818182
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
            "mean": 7444.013730861363,
            "min": 7332.5030948905105,
            "q1": 7351.113189781022,
            "median": 7444.088222222222,
            "q3": 7449.662422222223,
            "max": 7642.70172519084,
            "samples": [
              7444.088222222222,
              7449.662422222223,
              7642.70172519084,
              7332.5030948905105,
              7351.113189781022
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 14:26:46 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
    "id": "37943192001-1",
    "branch": "main",
    "commit": {
      "id": "8a9df4191f421554ddfa538ebdd62070b24dc231",
      "url": "https://github.com/plug-obp/variohyve/commit/8a9df4191f421554ddfa538ebdd62070b24dc231",
      "message": "Merge first user-facing slice for v0.1.0"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37943192001/attempts/1"
  },
  {
    "schema": 2,
    "date": "2026-10-09T15:51:21.972500+00:00",
    "jmh_sha256": "f649279cdb2cec110ad600a4364a614fb80213657419773330ac11e732b3f206",
    "native_gc": {
      "nativeGc": "tracing",
      "nativeHeapCapacity": "16384",
      "nativeGcThreshold": "0.75"
    },
    "timing_scope": "prepared-runtime-v1",
    "payload_batch_sizes": {
      "vh.benchmarks.PreparedVisitorSemanticsBenchmark": 256,
      "vh.benchmarks.PreparedRecursionBenchmark": 16
    },
    "score_normalization": "per-payload-operation",
    "cases": [
      {
        "name": "closureSend",
        "params": {},
        "payload_batch_size": 256,
        "runtimes": {
          "VarioHyve": {
            "mean": 3.9274637053571424,
            "min": 2.9497416294642855,
            "q1": 3.05828515625,
            "median": 3.2750323660714287,
            "q3": 4.60046484375,
            "max": 5.75379453125,
            "samples": [
              5.75379453125,
              4.60046484375,
              3.05828515625,
              3.2750323660714287,
              2.9497416294642855
            ],
            "confidence99_9": [
              -0.7592197341947737,
              8.614147144909058
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 256
            }
          },
          "CPython": {
            "mean": 0.17821598627076707,
            "min": 0.17775602207627406,
            "q1": 0.17806722756319268,
            "median": 0.17825170685524164,
            "q3": 0.17840439552484558,
            "max": 0.17860057933428136,
            "samples": [
              0.17860057933428136,
              0.17840439552484558,
              0.17775602207627406,
              0.17825170685524164,
              0.17806722756319268
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
            "mean": 1.2382452731735643,
            "min": 1.232104451904297,
            "q1": 1.2326407893961997,
            "median": 1.235717239534012,
            "q3": 1.2453512687876747,
            "max": 1.2454126162456378,
            "samples": [
              1.2454126162456378,
              1.2326407893961997,
              1.2453512687876747,
              1.232104451904297,
              1.235717239534012
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 720.040343705702,
            "min": 375.90144345238093,
            "q1": 567.8779602272728,
            "median": 743.1356788194445,
            "q3": 838.6840735294118,
            "max": 1074.6025625,
            "samples": [
              1074.6025625,
              838.6840735294118,
              743.1356788194445,
              567.8779602272728,
              375.90144345238093
            ],
            "confidence99_9": [
              -302.21146953675066,
              1742.2921569481546
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 1113.457610399771,
            "min": 605.3401377314815,
            "q1": 773.8603267045454,
            "median": 1060.266603515625,
            "q3": 1393.9410408653846,
            "max": 1733.8799431818181,
            "samples": [
              1733.8799431818181,
              1393.9410408653846,
              1060.266603515625,
              773.8603267045454,
              605.3401377314815
            ],
            "confidence99_9": [
              -651.0595724193506,
              2877.974793218893
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 3896.4724019167634,
            "min": 2541.949321875,
            "q1": 2869.8886701388888,
            "median": 4158.631759615385,
            "q3": 4844.6464204545455,
            "max": 5067.2458375,
            "samples": [
              5067.2458375,
              4844.6464204545455,
              4158.631759615385,
              2869.8886701388888,
              2541.949321875
            ],
            "confidence99_9": [
              -505.35380596895993,
              8298.298609802487
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 6045.513206753663,
            "min": 4011.366705357143,
            "q1": 4295.154701923077,
            "median": 6264.866854166667,
            "q3": 7349.25759375,
            "max": 8306.920178571429,
            "samples": [
              8306.920178571429,
              7349.25759375,
              6264.866854166667,
              4011.366705357143,
              4295.154701923077
            ],
            "confidence99_9": [
              -1174.6582072404199,
              13265.684620747747
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 694.6663397015433,
            "min": 468.4969904661017,
            "q1": 470.2964525862069,
            "median": 669.99484375,
            "q3": 859.8756415441177,
            "max": 1004.6677701612904,
            "samples": [
              1004.6677701612904,
              859.8756415441177,
              669.99484375,
              468.4969904661017,
              470.2964525862069
            ],
            "confidence99_9": [
              -219.60438236322761,
              1608.9370617663142
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 675.3252126881721,
            "min": 672.8674220430107,
            "q1": 673.9868615591398,
            "median": 675.4048548387098,
            "q3": 675.8114925675676,
            "max": 678.5554324324324,
            "samples": [
              678.5554324324324,
              675.4048548387098,
              672.8674220430107,
              673.9868615591398,
              675.8114925675676
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
            "mean": 1860.280509991912,
            "min": 1849.4218400735294,
            "q1": 1849.6883345588235,
            "median": 1855.447624074074,
            "q3": 1865.3931666666667,
            "max": 1881.4515845864662,
            "samples": [
              1855.447624074074,
              1849.4218400735294,
              1881.4515845864662,
              1865.3931666666667,
              1849.6883345588235
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 355.66612198640996,
            "min": 239.11025186567164,
            "q1": 266.3977757936508,
            "median": 350.68673,
            "q3": 420.08053977272726,
            "max": 502.0553125,
            "samples": [
              502.0553125,
              420.08053977272726,
              350.68673,
              266.3977757936508,
              239.11025186567164
            ],
            "confidence99_9": [
              -62.43435566516024,
              773.7665996379801
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 50.61371850499551,
            "min": 50.36127779447116,
            "q1": 50.5365359375,
            "median": 50.617124294354845,
            "q3": 50.67507439516129,
            "max": 50.878580103490265,
            "samples": [
              50.5365359375,
              50.36127779447116,
              50.67507439516129,
              50.878580103490265,
              50.617124294354845
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
            "mean": 308.74479492735867,
            "min": 300.1152205357143,
            "q1": 304.33459071601936,
            "median": 304.40128003640774,
            "q3": 308.11477267156863,
            "max": 326.7581106770833,
            "samples": [
              326.7581106770833,
              300.1152205357143,
              304.40128003640774,
              304.33459071601936,
              308.11477267156863
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 3606.1210386445878,
            "min": 2608.2718,
            "q1": 2692.4453289473686,
            "median": 3201.78968359375,
            "q3": 4596.774693181818,
            "max": 4931.3236875,
            "samples": [
              4931.3236875,
              4596.774693181818,
              3201.78968359375,
              2608.2718,
              2692.4453289473686
            ],
            "confidence99_9": [
              -581.8622820042378,
              7794.104359293413
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 827.035517526795,
            "min": 825.2000123355263,
            "q1": 825.5989917763159,
            "median": 827.2861381578947,
            "q3": 828.3395802980133,
            "max": 828.7528650662251,
            "samples": [
              828.7528650662251,
              828.3395802980133,
              825.5989917763159,
              825.2000123355263,
              827.2861381578947
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
            "mean": 4131.163237779434,
            "min": 4116.815729508197,
            "q1": 4126.7639139344265,
            "median": 4135.753983471074,
            "q3": 4136.327223140496,
            "max": 4140.155338842975,
            "samples": [
              4116.815729508197,
              4136.327223140496,
              4126.7639139344265,
              4135.753983471074,
              4140.155338842975
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 2629.723541602564,
            "min": 1834.5565673076924,
            "q1": 1911.831425,
            "median": 2614.9184375,
            "q3": 3312.472691666667,
            "max": 3474.8385865384616,
            "samples": [
              3474.8385865384616,
              3312.472691666667,
              2614.9184375,
              1834.5565673076924,
              1911.831425
            ],
            "confidence99_9": [
              -308.04564455764194,
              5567.49272776277
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 191.5221880253535,
            "min": 191.06777896341464,
            "q1": 191.27500457317075,
            "median": 191.47892073170732,
            "q3": 191.63136756859754,
            "max": 192.1578682898773,
            "samples": [
              191.27500457317075,
              192.1578682898773,
              191.47892073170732,
              191.06777896341464,
              191.63136756859754
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
            "mean": 2643.4462176605716,
            "min": 2625.5866413612566,
            "q1": 2625.8638874345547,
            "median": 2628.8037958115183,
            "q3": 2638.395113157895,
            "max": 2698.5816505376342,
            "samples": [
              2698.5816505376342,
              2628.8037958115183,
              2625.8638874345547,
              2638.395113157895,
              2625.5866413612566
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 256,
        "runtimes": {
          "VarioHyve": {
            "mean": 2.9077219782366073,
            "min": 1.64056201171875,
            "q1": 1.9689068080357144,
            "median": 1.9812293526785714,
            "q3": 2.83069375,
            "max": 6.11721796875,
            "samples": [
              6.11721796875,
              2.83069375,
              1.9689068080357144,
              1.64056201171875,
              1.9812293526785714
            ],
            "confidence99_9": [
              -4.206142003358551,
              10.021585959831766
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 256
            }
          },
          "CPython": {
            "mean": 0.0742730967682045,
            "min": 0.07274841940743583,
            "q1": 0.07389167910355787,
            "median": 0.07462669365151414,
            "q3": 0.07491329065958659,
            "max": 0.07518540101892808,
            "samples": [
              0.07274841940743583,
              0.07389167910355787,
              0.07462669365151414,
              0.07491329065958659,
              0.07518540101892808
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
            "mean": 5.978140715659065,
            "min": 1.5252634847765771,
            "q1": 4.660733365885417,
            "median": 6.82479349093967,
            "q3": 7.570785920845446,
            "max": 9.309127315848215,
            "samples": [
              9.309127315848215,
              6.82479349093967,
              7.570785920845446,
              4.660733365885417,
              1.5252634847765771
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 256,
        "runtimes": {
          "VarioHyve": {
            "mean": 14.155089218750001,
            "min": 9.456029575892858,
            "q1": 11.071261160714286,
            "median": 11.457994419642857,
            "q3": 17.23501171875,
            "max": 21.55514921875,
            "samples": [
              21.55514921875,
              17.23501171875,
              11.457994419642857,
              11.071261160714286,
              9.456029575892858
            ],
            "confidence99_9": [
              -5.395442665800546,
              33.70562110330055
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 256
            }
          },
          "CPython": {
            "mean": 6.630791913320966,
            "min": 6.619893713048986,
            "q1": 6.627538554423564,
            "median": 6.627869444151182,
            "q3": 6.629864653716216,
            "max": 6.648793201264881,
            "samples": [
              6.648793201264881,
              6.619893713048986,
              6.627538554423564,
              6.629864653716216,
              6.627869444151182
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
            "mean": 219.02153838529208,
            "min": 117.22059456928838,
            "q1": 231.48234903492647,
            "median": 232.86492361111112,
            "q3": 249.74759598214288,
            "max": 263.7922287289916,
            "samples": [
              249.74759598214288,
              263.7922287289916,
              232.86492361111112,
              231.48234903492647,
              117.22059456928838
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 205.53436996894493,
            "min": 133.95564133522728,
            "q1": 156.58106331168833,
            "median": 204.84357661290323,
            "q3": 250.87321108490565,
            "max": 281.4183575,
            "samples": [
              281.4183575,
              250.87321108490565,
              204.84357661290323,
              156.58106331168833,
              133.95564133522728
            ],
            "confidence99_9": [
              -32.8824390316949,
              443.95117896958476
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 18.48348540064032,
            "min": 18.37510094188084,
            "q1": 18.464630527712263,
            "median": 18.50235974351415,
            "q3": 18.530376695165096,
            "max": 18.544959094929247,
            "samples": [
              18.50235974351415,
              18.544959094929247,
              18.37510094188084,
              18.530376695165096,
              18.464630527712263
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
            "mean": 255.2135481133877,
            "min": 226.3595676708633,
            "q1": 256.240178022541,
            "median": 261.64633307291666,
            "q3": 264.6380971638655,
            "max": 267.1835646367521,
            "samples": [
              256.240178022541,
              261.64633307291666,
              264.6380971638655,
              267.1835646367521,
              226.3595676708633
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 2072.344104398939,
            "min": 1559.6089729166667,
            "q1": 1664.0429933035714,
            "median": 1947.0308885869565,
            "q3": 2333.68501875,
            "max": 2857.3526484375,
            "samples": [
              2857.3526484375,
              2333.68501875,
              1947.0308885869565,
              1664.0429933035714,
              1559.6089729166667
            ],
            "confidence99_9": [
              25.836435882499245,
              4118.851772915379
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 158.98307833906964,
            "min": 158.28955571338383,
            "q1": 159.01690672348485,
            "median": 159.06408375634518,
            "q3": 159.16447192258883,
            "max": 159.38037357954545,
            "samples": [
              159.16447192258883,
              159.38037357954545,
              158.28955571338383,
              159.01690672348485,
              159.06408375634518
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
            "mean": 2491.827805112482,
            "min": 2478.204762376238,
            "q1": 2484.6771262376237,
            "median": 2492.386165841584,
            "q3": 2496.503278606965,
            "max": 2507.3676925,
            "samples": [
              2484.6771262376237,
              2492.386165841584,
              2496.503278606965,
              2507.3676925,
              2478.204762376238
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 434.25532367567047,
            "min": 245.328803442029,
            "q1": 298.29993541666664,
            "median": 443.2196976744186,
            "q3": 455.8995610119048,
            "max": 728.5286208333333,
            "samples": [
              728.5286208333333,
              455.8995610119048,
              443.2196976744186,
              298.29993541666664,
              245.328803442029
            ],
            "confidence99_9": [
              -289.52927014818334,
              1158.0399174995243
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 28.229316900854315,
            "min": 28.182711134217627,
            "q1": 28.206093497077337,
            "median": 28.21233090714928,
            "q3": 28.262511184802158,
            "max": 28.28293778102518,
            "samples": [
              28.206093497077337,
              28.262511184802158,
              28.28293778102518,
              28.21233090714928,
              28.182711134217627
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
            "mean": 557.279360348086,
            "min": 338.3353655405405,
            "q1": 352.44055196629216,
            "median": 369.00862389705884,
            "q3": 520.91751875,
            "max": 1205.6947415865384,
            "samples": [
              1205.6947415865384,
              520.91751875,
              338.3353655405405,
              352.44055196629216,
              369.00862389705884
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 533.9268911712604,
            "min": 339.60863831967214,
            "q1": 438.09939285714285,
            "median": 537.0625625,
            "q3": 602.7766746794872,
            "max": 752.0871875,
            "samples": [
              752.0871875,
              602.7766746794872,
              537.0625625,
              438.09939285714285,
              339.60863831967214
            ],
            "confidence99_9": [
              -72.73754689554778,
              1140.5913292380687
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 34.81042667873686,
            "min": 34.71200874585177,
            "q1": 34.75280174917035,
            "median": 34.76025442477876,
            "q3": 34.83897936255531,
            "max": 34.98808911132812,
            "samples": [
              34.71200874585177,
              34.76025442477876,
              34.75280174917035,
              34.83897936255531,
              34.98808911132812
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
            "mean": 398.19290796988474,
            "min": 376.096124251497,
            "q1": 387.28118788580247,
            "median": 405.4034919354839,
            "q3": 407.28209090909087,
            "max": 414.90164486754963,
            "samples": [
              407.28209090909087,
              376.096124251497,
              387.28118788580247,
              414.90164486754963,
              405.4034919354839
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 2976.0204806547617,
            "min": 2063.0767708333333,
            "q1": 2308.440336309524,
            "median": 3042.114703125,
            "q3": 3586.1601607142857,
            "max": 3880.3104322916665,
            "samples": [
              3880.3104322916665,
              3586.1601607142857,
              3042.114703125,
              2308.440336309524,
              2063.0767708333333
            ],
            "confidence99_9": [
              -52.008886354142305,
              6004.049847663666
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 166.90729044028757,
            "min": 166.27833327792553,
            "q1": 166.83594813829788,
            "median": 166.88537566489362,
            "q3": 167.2132830882353,
            "max": 167.32351203208557,
            "samples": [
              167.32351203208557,
              166.27833327792553,
              166.83594813829788,
              166.88537566489362,
              167.2132830882353
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
            "mean": 2538.0874006101626,
            "min": 2527.5189494949495,
            "q1": 2532.4079494949497,
            "median": 2539.159296954315,
            "q3": 2545.2364619289337,
            "max": 2546.1143451776647,
            "samples": [
              2539.159296954315,
              2546.1143451776647,
              2527.5189494949495,
              2532.4079494949497,
              2545.2364619289337
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 2826.6516336270543,
            "min": 2051.1187682291666,
            "q1": 2144.3081467391303,
            "median": 2688.7679756944444,
            "q3": 3509.348830357143,
            "max": 3739.7144471153847,
            "samples": [
              3739.7144471153847,
              3509.348830357143,
              2688.7679756944444,
              2051.1187682291666,
              2144.3081467391303
            ],
            "confidence99_9": [
              -147.2167310315417,
              5800.51999828565
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 176.57914848299316,
            "min": 174.2891361111111,
            "q1": 174.55353593750002,
            "median": 175.13704155027932,
            "q3": 175.19195827513965,
            "max": 183.72407054093568,
            "samples": [
              174.55353593750002,
              175.19195827513965,
              175.13704155027932,
              183.72407054093568,
              174.2891361111111
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
            "mean": 2651.109368442748,
            "min": 2619.428335078534,
            "q1": 2624.832921465969,
            "median": 2625.080502617801,
            "q3": 2645.849716931217,
            "max": 2740.3553661202186,
            "samples": [
              2740.3553661202186,
              2645.849716931217,
              2624.832921465969,
              2625.080502617801,
              2619.428335078534
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 212.43175567873345,
            "min": 135.1454849137931,
            "q1": 173.72495334507042,
            "median": 207.048596875,
            "q3": 254.3913786764706,
            "max": 291.8483645833333,
            "samples": [
              291.8483645833333,
              254.3913786764706,
              207.048596875,
              173.72495334507042,
              135.1454849137931
            ],
            "confidence99_9": [
              -27.79388642877342,
              452.6573977862403
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 18.125658572192375,
            "min": 17.900063441051138,
            "q1": 17.906771732954546,
            "median": 18.033788614535553,
            "q3": 18.105941840277776,
            "max": 18.68172723214286,
            "samples": [
              18.68172723214286,
              17.900063441051138,
              17.906771732954546,
              18.105941840277776,
              18.033788614535553
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
            "mean": 239.6558499860913,
            "min": 222.22991666666667,
            "q1": 233.37125,
            "median": 236.32645394736844,
            "q3": 236.51334187030076,
            "max": 269.8382874461207,
            "samples": [
              269.8382874461207,
              222.22991666666667,
              233.37125,
              236.51334187030076,
              236.32645394736844
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 2078.678056399418,
            "min": 1499.520808467742,
            "q1": 1613.0600089285715,
            "median": 2106.507252840909,
            "q3": 2426.1139539473684,
            "max": 2748.1882578125,
            "samples": [
              2748.1882578125,
              2426.1139539473684,
              2106.507252840909,
              1613.0600089285715,
              1499.520808467742
            ],
            "confidence99_9": [
              39.33275206279359,
              4118.023360736042
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 159.2887375903677,
            "min": 158.0430249368687,
            "q1": 158.3358529040404,
            "median": 158.9978448604061,
            "q3": 160.3278141025641,
            "max": 160.73915114795918,
            "samples": [
              158.9978448604061,
              160.73915114795918,
              160.3278141025641,
              158.3358529040404,
              158.0430249368687
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
            "mean": 2507.1855994950497,
            "min": 2492.8390247524753,
            "q1": 2495.6972277227724,
            "median": 2503.9255425,
            "q3": 2518.818215,
            "max": 2524.6479875,
            "samples": [
              2524.6479875,
              2495.6972277227724,
              2503.9255425,
              2518.818215,
              2492.8390247524753
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 3632.3033197916666,
            "min": 2523.1987625,
            "q1": 2722.192540625,
            "median": 3393.5476708333335,
            "q3": 4657.6910625,
            "max": 4864.8865625,
            "samples": [
              4864.8865625,
              4657.6910625,
              3393.5476708333335,
              2523.1987625,
              2722.192540625
            ],
            "confidence99_9": [
              -535.5186004199959,
              7800.125240003329
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 931.8744186525705,
            "min": 927.6507361111111,
            "q1": 931.1536240740741,
            "median": 932.1561425925927,
            "q3": 933.1745065298508,
            "max": 935.2370839552239,
            "samples": [
              931.1536240740741,
              932.1561425925927,
              935.2370839552239,
              933.1745065298508,
              927.6507361111111
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
            "mean": 4740.814583018868,
            "min": 4727.286452830189,
            "q1": 4733.5819575471705,
            "median": 4736.479410377358,
            "q3": 4748.997839622642,
            "max": 4757.727254716981,
            "samples": [
              4757.727254716981,
              4736.479410377358,
              4748.997839622642,
              4733.5819575471705,
              4727.286452830189
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 695.7236149283913,
            "min": 465.25771516393445,
            "q1": 545.7810420673077,
            "median": 732.445540625,
            "q3": 841.0237142857143,
            "max": 894.1100625,
            "samples": [
              894.1100625,
              841.0237142857143,
              732.445540625,
              545.7810420673077,
              465.25771516393445
            ],
            "confidence99_9": [
              -17.984452965469814,
              1409.4316828222522
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 73.2671585864486,
            "min": 73.18192990654205,
            "q1": 73.21286499707944,
            "median": 73.2237137120327,
            "q3": 73.33481155081776,
            "max": 73.38247276577103,
            "samples": [
              73.33481155081776,
              73.2237137120327,
              73.38247276577103,
              73.18192990654205,
              73.21286499707944
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
            "mean": 687.4447535575141,
            "min": 683.4918203551913,
            "q1": 684.9186304644809,
            "median": 685.6074153005464,
            "q3": 689.8895964187328,
            "max": 693.3163052486188,
            "samples": [
              689.8895964187328,
              685.6074153005464,
              683.4918203551913,
              684.9186304644809,
              693.3163052486188
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 159732.3908125,
            "min": 150161.557,
            "q1": 154294.8115625,
            "median": 162140.085625,
            "q3": 165343.8211875,
            "max": 166721.6786875,
            "samples": [
              165343.8211875,
              154294.8115625,
              162140.085625,
              166721.6786875,
              150161.557
            ],
            "confidence99_9": [
              132011.53736549904,
              187453.24425950096
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 4512.519559311072,
            "min": 4465.762995535714,
            "q1": 4474.199419642858,
            "median": 4481.684772321428,
            "q3": 4484.873823008849,
            "max": 4656.076786046511,
            "samples": [
              4484.873823008849,
              4656.076786046511,
              4481.684772321428,
              4465.762995535714,
              4474.199419642858
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
            "mean": 46227.181599999996,
            "min": 45833.579,
            "q1": 46131.48931818182,
            "median": 46306.17563636363,
            "q3": 46336.255454545455,
            "max": 46528.40859090909,
            "samples": [
              45833.579,
              46306.17563636363,
              46131.48931818182,
              46528.40859090909,
              46336.255454545455
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
        "payload_batch_size": 16,
        "runtimes": {
          "VarioHyve": {
            "mean": 9885.586580714287,
            "min": 8465.431455357142,
            "q1": 8467.783410714286,
            "median": 9514.4761875,
            "q3": 10954.0094375,
            "max": 12026.2324125,
            "samples": [
              10954.0094375,
              9514.4761875,
              8467.783410714286,
              12026.2324125,
              8465.431455357142
            ],
            "confidence99_9": [
              3831.1847990267843,
              15939.98836240179
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
              "measurementTime": "1 s",
              "timingScope": "prepared-runtime-v1",
              "scoreNormalization": "per-payload-operation",
              "payloadBatchSize": 16
            }
          },
          "CPython": {
            "mean": 637.0363697729691,
            "min": 633.1663491161615,
            "q1": 634.418433080808,
            "median": 634.473134469697,
            "q3": 636.4137595177665,
            "max": 646.7101726804124,
            "samples": [
              636.4137595177665,
              633.1663491161615,
              634.473134469697,
              634.418433080808,
              646.7101726804124
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
            "mean": 8056.002304474879,
            "min": 7957.1732619047625,
            "q1": 7983.029920634921,
            "median": 8006.366648,
            "q3": 8013.669072,
            "max": 8319.77261983471,
            "samples": [
              8013.669072,
              8319.77261983471,
              8006.366648,
              7983.029920634921,
              7957.1732619047625
            ],
            "runtime": {
              "python": "3.12.8 (Fri Oct 09 15:48:29 UTC 2026)\n[Graal, Interpreted, Java 23.0.2 (amd64)]",
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
    "diagnostics": [
      {
        "name": "machineSetup",
        "params": {},
        "timing_scope": "runtime-setup-v1",
        "native_gc": null,
        "runtimes": {
          "VarioHyve": {
            "mean": 0.008502789440591987,
            "min": 0.008493118645777974,
            "q1": 0.00849590724991657,
            "median": 0.00850168501709528,
            "q3": 0.008505032649722445,
            "max": 0.008518203640447669,
            "samples": [
              0.008505032649722445,
              0.008518203640447669,
              0.008493118645777974,
              0.00849590724991657,
              0.00850168501709528
            ],
            "confidence99_9": [
              0.00846502474636983,
              0.008540554134814143
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
              "measurementTime": "1 s",
              "timingScope": "runtime-setup-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "seedSetup",
        "params": {},
        "timing_scope": "runtime-setup-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 676.3420254573523,
            "min": 527.896308707124,
            "q1": 563.1244261650758,
            "median": 628.4307707286432,
            "q3": 733.3306986803519,
            "max": 928.9279230055658,
            "samples": [
              928.9279230055658,
              733.3306986803519,
              563.1244261650758,
              628.4307707286432,
              527.896308707124
            ],
            "confidence99_9": [
              54.85600292874767,
              1297.8280479859568
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
              "measurementTime": "1 s",
              "timingScope": "runtime-setup-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "worldSetup",
        "params": {},
        "timing_scope": "runtime-setup-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 713.6200304767788,
            "min": 562.8513471910112,
            "q1": 582.302036088475,
            "median": 638.9813573707722,
            "q3": 837.3263720735786,
            "max": 946.6390396600567,
            "samples": [
              946.6390396600567,
              837.3263720735786,
              582.302036088475,
              562.8513471910112,
              638.9813573707722
            ],
            "confidence99_9": [
              60.29255167583176,
              1366.9475092777257
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
              "measurementTime": "1 s",
              "timingScope": "runtime-setup-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "closureSend",
        "params": {},
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 727.9061932257104,
            "min": 569.3882832764505,
            "q1": 612.2991713586291,
            "median": 618.2079962940087,
            "q3": 892.9117987533393,
            "max": 946.7237164461247,
            "samples": [
              946.7237164461247,
              892.9117987533393,
              612.2991713586291,
              618.2079962940087,
              569.3882832764505
            ],
            "confidence99_9": [
              45.47647070131211,
              1410.3359157501086
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1511.9373475698928,
            "min": 1038.8076988577363,
            "q1": 1110.0994168514412,
            "median": 1641.6045016393443,
            "q3": 1715.733602058319,
            "max": 2053.441518442623,
            "samples": [
              2053.441518442623,
              1715.733602058319,
              1641.6045016393443,
              1110.0994168514412,
              1038.8076988577363
            ],
            "confidence99_9": [
              -140.8129435747569,
              3164.6876387145426
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 2010.6131078336107,
            "min": 1272.5227407878017,
            "q1": 1544.9764838212634,
            "median": 2074.955225672878,
            "q3": 2384.4036152019003,
            "max": 2776.2074736842105,
            "samples": [
              2776.2074736842105,
              2384.4036152019003,
              2074.955225672878,
              1544.9764838212634,
              1272.5227407878017
            ],
            "confidence99_9": [
              -340.79454881053834,
              4362.02076447776
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 4977.874006099979,
            "min": 3075.9929478527606,
            "q1": 3851.32535,
            "median": 5335.93545212766,
            "q3": 6095.103527272728,
            "max": 6531.012753246753,
            "samples": [
              6531.012753246753,
              6095.103527272728,
              5335.93545212766,
              3851.32535,
              3075.9929478527606
            ],
            "confidence99_9": [
              -692.8163609155272,
              10648.564373115485
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 6977.6018472705355,
            "min": 4364.5165,
            "q1": 4762.870056872038,
            "median": 7540.55684962406,
            "q3": 8553.224406779662,
            "max": 9666.841423076923,
            "samples": [
              9666.841423076923,
              8553.224406779662,
              7540.55684962406,
              4762.870056872038,
              4364.5165
            ],
            "confidence99_9": [
              -2004.5495015719052,
              15959.753196112975
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1526.4372854923308,
            "min": 1035.046714581179,
            "q1": 1132.6531380090498,
            "median": 1453.3931044992744,
            "q3": 1818.8867876588022,
            "max": 2192.206682713348,
            "samples": [
              2192.206682713348,
              1818.8867876588022,
              1453.3931044992744,
              1132.6531380090498,
              1035.046714581179
            ],
            "confidence99_9": [
              -330.9164346720718,
              3383.7910056567334
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1268.8821470748837,
            "min": 878.9983629173989,
            "q1": 1135.6911167800454,
            "median": 1267.8455113924051,
            "q3": 1484.7335430267062,
            "max": 1577.1422012578616,
            "samples": [
              1577.1422012578616,
              1484.7335430267062,
              1267.8455113924051,
              1135.6911167800454,
              878.9983629173989
            ],
            "confidence99_9": [
              194.5483911642766,
              2343.215902985491
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 4710.580984610923,
            "min": 3102.649111455108,
            "q1": 3261.8346233766233,
            "median": 4927.735004901961,
            "q3": 5908.4097529411765,
            "max": 6352.276430379747,
            "samples": [
              6352.276430379747,
              5908.4097529411765,
              4927.735004901961,
              3261.8346233766233,
              3102.649111455108
            ],
            "confidence99_9": [
              -1020.7453312033322,
              10441.907300425179
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 3863.6755326521816,
            "min": 2460.96343980344,
            "q1": 3071.356623853211,
            "median": 4182.841779166667,
            "q3": 4380.528877729258,
            "max": 5222.686942708333,
            "samples": [
              5222.686942708333,
              4380.528877729258,
              4182.841779166667,
              3071.356623853211,
              2460.96343980344
            ],
            "confidence99_9": [
              -359.45004094790147,
              8086.801106252265
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "literal",
        "params": {},
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 699.7066066491486,
            "min": 566.1162767402377,
            "q1": 582.5158813263525,
            "median": 640.9999173606662,
            "q3": 768.3069915579432,
            "max": 940.5939662605435,
            "samples": [
              940.5939662605435,
              768.3069915579432,
              582.5158813263525,
              566.1162767402377,
              640.9999173606662
            ],
            "confidence99_9": [
              97.72628169791267,
              1301.6869316003845
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "methodSend",
        "params": {},
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 699.4371362836757,
            "min": 553.8345491712707,
            "q1": 577.2646261520738,
            "median": 636.6323857415658,
            "q3": 817.1291404081633,
            "max": 912.3249799453054,
            "samples": [
              912.3249799453054,
              817.1291404081633,
              577.2646261520738,
              636.6323857415658,
              553.8345491712707
            ],
            "confidence99_9": [
              92.90475097946944,
              1305.969521587882
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "mutual",
        "params": {
          "depth": "16"
        },
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1062.6940873959052,
            "min": 696.9355281837161,
            "q1": 914.4792151321786,
            "median": 1094.992817286652,
            "q3": 1265.8922351453855,
            "max": 1341.170641231593,
            "samples": [
              1341.170641231593,
              1265.8922351453855,
              1094.992817286652,
              914.4792151321786,
              696.9355281837161
            ],
            "confidence99_9": [
              51.8929815635546,
              2073.4951932282556
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "mutual",
        "params": {
          "depth": "256"
        },
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 3166.940039449627,
            "min": 2055.033286885246,
            "q1": 2559.775344387755,
            "median": 3061.217993883792,
            "q3": 3828.0753091603056,
            "max": 4330.598262931035,
            "samples": [
              4330.598262931035,
              3828.0753091603056,
              3061.217993883792,
              2559.775344387755,
              2055.033286885246
            ],
            "confidence99_9": [
              -387.02024385835284,
              6720.900322757607
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1381.4864359295823,
            "min": 975.6574985422741,
            "q1": 1267.321082278481,
            "median": 1367.0132373806275,
            "q3": 1521.1290015174507,
            "max": 1776.311359929078,
            "samples": [
              1776.311359929078,
              1521.1290015174507,
              1367.0132373806275,
              1267.321082278481,
              975.6574985422741
            ],
            "confidence99_9": [
              237.04957765458494,
              2525.9232942045796
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1499.147658884714,
            "min": 1028.9623305954826,
            "q1": 1369.877550546448,
            "median": 1495.6897298507463,
            "q3": 1637.9011402936378,
            "max": 1963.307543137255,
            "samples": [
              1963.307543137255,
              1637.9011402936378,
              1495.6897298507463,
              1369.877550546448,
              1028.9623305954826
            ],
            "confidence99_9": [
              175.71617296825275,
              2822.579144801175
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 3939.3791926218387,
            "min": 2576.7890514138817,
            "q1": 3150.748971786834,
            "median": 3931.0260274509806,
            "q3": 4510.152852017937,
            "max": 5528.17906043956,
            "samples": [
              5528.17906043956,
              4510.152852017937,
              3931.0260274509806,
              3150.748971786834,
              2576.7890514138817
            ],
            "confidence99_9": [
              -505.04083711271915,
              8383.799222356396
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 4559.855554628366,
            "min": 2683.3026514745306,
            "q1": 4020.270502008032,
            "median": 4758.862360189573,
            "q3": 5075.288696969697,
            "max": 6261.5535625,
            "samples": [
              6261.5535625,
              5075.288696969697,
              4758.862360189573,
              4020.270502008032,
              2683.3026514745306
            ],
            "confidence99_9": [
              -539.0331559224587,
              9658.74426517919
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "simple",
        "params": {
          "depth": "16"
        },
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1069.1455551050192,
            "min": 754.3820942684766,
            "q1": 854.8906473099914,
            "median": 1108.24582079646,
            "q3": 1233.5396100861008,
            "max": 1394.669603064067,
            "samples": [
              1394.669603064067,
              1233.5396100861008,
              1108.24582079646,
              854.8906473099914,
              754.3820942684766
            ],
            "confidence99_9": [
              51.268521752569086,
              2087.0225884574693
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      },
      {
        "name": "simple",
        "params": {
          "depth": "256"
        },
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 3067.2020709201684,
            "min": 2180.586786492375,
            "q1": 2316.7585069444444,
            "median": 2918.104306122449,
            "q3": 3687.132430147059,
            "max": 4233.428324894515,
            "samples": [
              4233.428324894515,
              3687.132430147059,
              2918.104306122449,
              2316.7585069444444,
              2180.586786492375
            ],
            "confidence99_9": [
              -331.34824786474655,
              6465.752389705083
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 4726.104618358244,
            "min": 3103.372507739938,
            "q1": 3241.9327612903226,
            "median": 5205.426958549223,
            "q3": 5709.064136363636,
            "max": 6370.726727848101,
            "samples": [
              6370.726727848101,
              5709.064136363636,
              5205.426958549223,
              3241.9327612903226,
              3103.372507739938
            ],
            "confidence99_9": [
              -964.7663319441517,
              10416.97556866064
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 1728.147295289466,
            "min": 1202.1895918367347,
            "q1": 1403.2520883590462,
            "median": 1860.7402379182156,
            "q3": 1894.2955378787879,
            "max": 2280.2590204545454,
            "samples": [
              2280.2590204545454,
              1894.2955378787879,
              1860.7402379182156,
              1403.2520883590462,
              1202.1895918367347
            ],
            "confidence99_9": [
              80.67247084866403,
              3375.622119730268
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 167255.58419999998,
            "min": 151224.20857142858,
            "q1": 160435.91085714285,
            "median": 168627.75414285716,
            "q3": 174153.99028571427,
            "max": 181836.05714285714,
            "samples": [
              174153.99028571427,
              168627.75414285716,
              160435.91085714285,
              151224.20857142858,
              181836.05714285714
            ],
            "confidence99_9": [
              121467.96287995468,
              213043.2055200453
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
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
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "runtimes": {
          "VarioHyve": {
            "mean": 11450.230969921864,
            "min": 10370.287701030928,
            "q1": 10401.292463917525,
            "median": 10740.63710638298,
            "q3": 11975.253071428571,
            "max": 13763.684506849315,
            "samples": [
              13763.684506849315,
              10740.63710638298,
              10370.287701030928,
              10401.292463917525,
              11975.253071428571
            ],
            "confidence99_9": [
              5870.852418842558,
              17029.60952100117
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
              "measurementTime": "1 s",
              "timingScope": "fresh-world-v1",
              "scoreNormalization": "per-invocation"
            }
          }
        }
      }
    ],
    "diagnostic_provenance": {
      "runtime-setup-v1": {
        "schema": 2,
        "suite": "runtime-setup",
        "timing_scope": "runtime-setup-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "payload_batch_sizes": {},
        "score_normalization": "per-invocation",
        "source_sha256": "398a4ab1eb87fc803667228fc90e571fcff050b043f3d1190c73c7cb4adbe955",
        "host": "runnervmmprz5",
        "revision": "654bb825126b895c244c00b843f5efa99fd66c0e",
        "worktree_dirty": false,
        "started": "2026-10-09T15:41:25.530193+00:00",
        "jmh_sha256": "526bb44578dfd54712561fdb7de6c11291e1ba74cb55775e6de0004f76b119af",
        "completed": "2026-10-09T15:41:51.588658+00:00"
      },
      "fresh-world-v1": {
        "schema": 2,
        "suite": "fresh-world",
        "timing_scope": "fresh-world-v1",
        "native_gc": {
          "nativeGc": "tracing",
          "nativeHeapCapacity": "16384",
          "nativeGcThreshold": "0.75"
        },
        "payload_batch_sizes": {},
        "score_normalization": "per-invocation",
        "source_sha256": "398a4ab1eb87fc803667228fc90e571fcff050b043f3d1190c73c7cb4adbe955",
        "host": "runnervmmprz5",
        "revision": "654bb825126b895c244c00b843f5efa99fd66c0e",
        "worktree_dirty": false,
        "started": "2026-10-09T15:42:01.444711+00:00",
        "jmh_sha256": "73e6afc2be88173bd2b9006109f1cb61dec40a59fdec59dbc664cd9a579abe6e",
        "completed": "2026-10-09T15:45:29.169707+00:00"
      }
    },
    "id": "37952882657-1",
    "branch": "main",
    "commit": {
      "id": "654bb825126b895c244c00b843f5efa99fd66c0e",
      "url": "https://github.com/plug-obp/variohyve/commit/654bb825126b895c244c00b843f5efa99fd66c0e",
      "message": "Separate prepared benchmark payloads from runtime initialization"
    },
    "run_url": "https://github.com/plug-obp/variohyve/actions/runs/37952882657/attempts/1"
  }
];
