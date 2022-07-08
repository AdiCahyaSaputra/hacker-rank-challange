/**
 * @Soal
 * Consider two points, p = (px, py) and q = (qx, qy). We consider the inversion
 * or point reflection, r = (rx, ry), of point p across point q to 
 * be a 180deg rotation of point p around q.
 * Given n sets of points p and q, find r for each pair 
 * of points and print two space-separated integers 
 * denoting the respective values of rx and ry on a new line.
 * 
 * @function fingPoint(px,py,qx,qy): number[2] -> rx, ry
 * 
 * @arguments px, py, qx, qy -> integer
 * 
 * @constraint
 * 1 <= n <= 15
 * -100 <= px,py,qx,qy <= 100
 * 
 * @input n = 2
 * p = 0,0 | q = 1,1
 * 
 * @output 
 * p = 1,1 | q = 2,2 | r = 3,3 
 * 
 * @explain
 * q = 2,2 -> r = qx + (n * 1/2), qy + (n * 0.5) = 3,3
 */

// const coba = 2;
// console.log(2 + (2 * (1/2)));

function findPoint(px, py, qx, qy) {
    // code
    const rx = qx - px + qx; // qx = 2.0 - px = 1.0 = 1.5 + qx = 2.0 = 3.5 -> this
    const ry = qy - py + qy; 

    return [rx, ry];
}
