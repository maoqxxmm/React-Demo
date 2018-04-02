function _compareDigit (d1, d2) {
  if (d1 === d2) {
      return 0;
  } else {
      return (d1 > d2) ? 1 : -1;
  }
}

export default {
  sortOrder (map1, map2) {
      var s1 = map1.get("sortOrder");
      var s2 = map2.get("sortOrder");
      return _compareDigit(s1, s2);
  }
}