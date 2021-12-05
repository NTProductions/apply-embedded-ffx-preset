var f = File("~/Desktop/Blinky.ffx");
f.encoding = 'BINARY';
f.open('e');
 
var binary;
binary = f.read().toSource();
 
var myFile = new File("~/Desktop/binaryOutput.txt");
        myFile.open("w");
        myFile.encoding = "BINARY";
        myFile.write(binary);
        myFile.close();
f.close();