// Data handPhone
const handPhone = [
    {
        Processor: "Ex 2100",
        Type: "S21 Ultra",
        Variant: [
            { RAM: 12, Internal: 256 },
            { RAM: 16, Internal: 512 }
        ],
        Tahun: 2021
    },
    {
        Processor: "SD 8 Gen 1",
        Type: "S22 Ultra",
        Variant: [
            { RAM: 12, Internal: 256 },
            { RAM: 12, Internal: 512 }
        ],
        Tahun: 2022
    },
    {
        Processor: "SD 8 Gen 2 for Galaxy",
        Type: "S23 plus",
        Variant: [
            { RAM: 8, Internal: 256 },
            { RAM: 8, Internal: 512 }
        ],
        Tahun: 2023
    },
    {
        Processor: "SD 8 Gen 2 for Galaxy",
        Type: "S23 Ultra",
        Variant: [
            { RAM: 12, Internal: 256 },
            { RAM: 12, Internal: 512 }
        ],
        Tahun: 2023
    }
];


const getProcessorWithRAM8 = () => {
  const processor = [];
  
  handPhone.forEach(phone => {
    const variantHP = phone.Variant;
    
    variantHP.forEach(hp => {
      if (hp.RAM == 8) {
        processor.push(phone.Processor);
      }
    });
  });
  
  // Mengembalikan array yang berisi processor dengan RAM 8
  return processor;
};

// Menampilkan hasil
console.log(getProcessorWithRAM8());

