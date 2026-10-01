window.BENCHMARK_DATA = {
  "lastUpdate": 1790882225124,
  "repoUrl": "https://github.com/plug-obp/variohyve",
  "entries": {
    "VarioHyve / shared-name-bootstrap": [
      {
        "commit": {
          "author": {
            "email": "ciprian.teodorov@gmail.com",
            "name": "Ciprian Teodorov",
            "username": "teodorov"
          },
          "committer": {
            "email": "ciprian.teodorov@gmail.com",
            "name": "Ciprian Teodorov",
            "username": "teodorov"
          },
          "distinct": true,
          "id": "f6e53da529f6834fbde83b3500d72d7363107df4",
          "message": "Add JMH benchmarks and branch history workflow",
          "timestamp": "2026-10-01T21:07:16+02:00",
          "tree_id": "95c498055dd7b81055e82dafdc6a089bdb85c498",
          "url": "https://github.com/plug-obp/variohyve/commit/f6e53da529f6834fbde83b3500d72d7363107df4"
        },
        "date": 1790882224701,
        "tool": "jmh",
        "benches": [
          {
            "name": "vh.benchmarks.VisitorSemanticsBenchmark.closureSend",
            "value": 10.814217470046009,
            "unit": "us/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "vh.benchmarks.VisitorSemanticsBenchmark.literal",
            "value": 10.54706762887356,
            "unit": "us/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "vh.benchmarks.VisitorSemanticsBenchmark.methodSend",
            "value": 12.722518765341244,
            "unit": "us/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}