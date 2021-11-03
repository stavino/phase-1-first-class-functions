function receivesAFunction(name){
    console.log(name())};

function returnsANamedFunction(){
    return function NamedFunction(){};
}
function returnsAnAnonymousFunction(){
    return () => "poop";
}