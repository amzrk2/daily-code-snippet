let str = 'Hellllo world';
str = str.replace(/(l)\1/g, '$1');

// sameas
str = str.replace(/(ll)/g, 'l');
