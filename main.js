let a = 5;

for (i=1;i<=a;i++){
    let x = "";
    for (j=1;j<=a-i;j++){
        x += " ";
    }
    for (z=1;z<=2*i-1;z++){
        x += "*";
    }
    console.log(x);
}
for (l=a-1;l>=0;l--){
    let y = "";
    for (m=0;m<a-l-1;m++){
        y += " ";
    }
    for (o=0;o<2*l+1;o++){
        y += "*";
    }
    console.log(y);
}