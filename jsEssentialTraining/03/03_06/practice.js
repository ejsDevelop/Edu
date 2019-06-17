var i = -2;
while (i < 10) {
  console.log(i);
  i = i + 2;
}

for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
      break;
    }
  }

  for (i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }

