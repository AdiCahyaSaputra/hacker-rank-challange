function solve(meal_cost, tip_percent, tax_percent) {
  return Math.round(meal_cost + ((tip_percent * meal_cost) / 100) + ((tax_percent * meal_cost) / 100));
}

console.log(solve(12, 20, 8));


function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var iSecond;
    var dSecond;
    var sSecond;

    // Read and save an integer, double, and String to your variables.
    iSecond = 4;
    dSecond = 4.0;
    sSecond = "is the best place to learn and practice coding!";

    console.log(i, d, s);

    // // Print the sum of both integer variables on a new line.
    // console.log(i + iSecond);
    //
    // // Print the sum of the double variables on a new line. console.log(parseFloat(d + dSecond)); Concatenate and print the String variables on a new line
    // console.log(parseFloat(d) + parseFloat(dSecond));
    //
    // console.log(s + sSecond);

}

main();
