talentos.flat().forEach((talento, index) => {
  base('Talentos IT').create(talento, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId(), index);
  });
});
