const fs = require('fs');

const file = 'src/assets/img/home/megamovil-negocio-banner02.jpg';
if (fs.existsSync(file)) {
  const stats = fs.statSync(file);
  console.log(`File exists. Size: ${stats.size} bytes`);
  
  // read first few bytes to check if it's a valid JPEG
  const buffer = Buffer.alloc(4);
  const fd = fs.openSync(file, 'r');
  fs.readSync(fd, buffer, 0, 4, 0);
  fs.closeSync(fd);
  
  console.log('Hex header:', buffer.toString('hex'));
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    console.log('Valid JPEG header found.');
  } else {
    console.log('INVALID JPEG HEADER.');
  }
} else {
  console.log('File does NOT exist.');
}
