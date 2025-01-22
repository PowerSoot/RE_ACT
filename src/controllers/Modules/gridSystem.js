const column = new Column(`<a href="index.html" style="font-size: 13px" class="link-underline-opacity-0 link-underline text-info"
    >Home</a>`
);
comlumn.openingTag = `<di class="col-3 d-flex justify-content-end alighn-items-end">`
const row = new Row ();
row.openingTag = `<div class="row alighn-items-end d-flex">`;
row.addColumn(column)
const row = new row();
const column = new Column(row);