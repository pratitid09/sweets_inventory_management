export  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  export function doSomeStuff(
    withThis: string,
    andThat: string,
    andThose: string[]
  ) {
    //function on one line
    if (!andThose.length) {
      return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    return;
  }