function symmetricPoint(p, q) {
    let x = q[0] > p[0] ? q[0] - p[0] + q[0] : q[0] - Math.abs(q[0] - p[0])
    let y = q[1] > p[1] ? q[1] - p[1] + q[1] : q[1] - Math.abs(q[1] - p[1])
    console.log([x, y])
    return [x, y]
  }