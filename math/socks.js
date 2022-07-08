/**
  * @SOAL
  *
  * A person is getting ready to leave 
  * and needs a pair of matching socks. 
  * If there are (n) colors of socks in 
  * the drawer, how many socks need to 
  * be removed to be certain of having 
  * a matching pair?
  * 
  * @function minimalDraw(n): integer
  *
  * @argument Integer n -> number of color socks 
  * @returns Integer -> minimum to guarantee a
  * matching pair..
  *
  * @constraint 
  *
  * 1 <= t <= 1000 -> t = test case 
  * 0 <= n <= 10^6 -> n = colors 
  *
  **/

// Example n = 10. if this stupid person pick 10 times maybe they will get 10 different colors of socks, then if this fckin stupid person pick 11 socks at least they will get 1 matching pair. etc...
const minimalDraw = (n) => n + 1;
