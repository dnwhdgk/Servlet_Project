let input = "박정은,서하은,성우석,황치열,이성문,강덕모,김남호,김동은,김신원,황치열,문근해,이동규,정대은,정승우,정태경,조성규,조하은,황석민,황치열";

let cntNames = function(str){
  this.array = str.split(",");
}
cntNames.prototype.cntLName = function(str){
  return this.array.map(v=> v.startsWith(str)? 1: 0).reduce((a,b) => a+b, 0);
};
cntNames.prototype.cntFindName = function(str){
  return this.array.map(v=> v === str ? 1: 0).reduce((a,b) => a+b, 0);
};
cntNames.prototype.sortNames = function(srt){
  let array = Array.from(new Set(this.array));
  return srt && srt.sort ? array.sort().join(",") : array.join(",");
}
let exNames = new cntNames(input);
console.log(exNames.cntLName("김"));
console.log(exNames.cntLName("황"));
console.log(exNames.cntFindName("황치열"));

console.log(exNames.sortNames());
console.log(exNames.sortNames({sort : true}));