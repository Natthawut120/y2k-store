// ข้อมูลสินค้าทั้งหมด
const products = [
    {
        title: "Harajuku Y2k Skeleton Goddess",
        price: "฿134 - ฿211",
        description: "เสื้อฮู้ดสไตล์ Harajuku Y2K พิมพ์ลายโครงกระดูกเทพธิดา ดีไซน์เท่ห์สุดๆ เหมาะสำหรับคนที่ชอบสไตล์สตรีทแฟชั่น",
        material: "Cotton ผสม Polyester คุณภาพดี",
        size: "M, L, XL",
        color: "ดำ, เทา, ขาว",
        feature: "ลายพิมพ์คมชัด ไม่หลุดลอก ใส่สบาย",
        image: "https://down-th.img.susercontent.com/file/sg-11134201-7rasf-majjoxwftipv15@resize_w450_nl.webp",
        link: "https://s.shopee.co.th/1LXrlyYgih"
    },
    {
        title: "Y2K Street hoodie ลายพิมพ์ตัวอักษรและดาว",
        price: "฿134 - ฿270",
        description: "เสื้อฮู้ดสไตล์ Y2K Street พิมพ์ลายตัวอักษรและดาวสุดเท่ ดีไซน์ทันสมัย เหมาะกับทุกโอกาส",
        material: "ผ้า Cotton แท้ 100%",
        size: "S, M, L, XL, XXL",
        color: "ดำ, ขาว, กรมท่า, เทา",
        feature: "ผ้านุ่ม ระบายอากาศดี มีฮู้ดปรับได้",
        image: "https://down-th.img.susercontent.com/file/sg-11134201-824hc-mejon2b8gx6t7e@resize_w450_nl.webp",
        link: "https://s.shopee.co.th/12UBTEN4i"
    },
    {
        title: "Ari Jersey Graphic Cal Cotton",
        price: "฿150",
        description: "เสื้อฮู้ดสไตล์ Jersey พิมพ์กราฟิก ผ้าคอตตอนคุณภาพสูง สวมใส่สบาย เหมาะกับสไตล์ Casual",
        material: "Cotton Jersey เนื้อนุ่ม",
        size: "M, L, XL",
        color: "ดำ, เทา",
        feature: "น้ำหนักเบา สวมใส่สบายทั้งวัน",
        image: "https://down-th.img.susercontent.com/file/sg-11134201-7rfha-m9pe9hpcmnk0c0@resize_w450_nl.webp",
        link: "https://s.shopee.co.th/5L40XBaujA"
    },
    {
        title: "Dark Retro Hoodie Y2K",
        price: "฿256.00",
        description: "เสื้อฮู้ดสไตล์ Dark Retro Y2K บรรยากาศมืดลึกลับ ดีไซน์เท่ๆ แบบวินเทจ เหมาะกับสายสตรีท",
        material: "ผ้าฝ้ายผสม เนื้อหนานุ่ม",
        size: "M, L, XL",
        color: "ดำ, เทาเข้ม",
        feature: "ดีไซน์วินเทจ พิมพ์ลายคุณภาพสูง",
        image: "https://down-zl-th.img.susercontent.com/sg-11134201-7rdx4-m0b0ao0xk0xff1.webp",
        link: "https://s.shopee.co.th/3qFIzURevj"
    },
    {
        title: "เสื้อฮู้ด โครงกระดูก1mill ฮู้ด Hoodie Y2k Cotton Casual",
        price: "฿249.00",
        description: "เสื้อฮู้ดลายโครงกระดูก สไตล์ Y2K Casual ผ้าคอตตอนนุ่ม สวมใส่สบาย เหมาะกับชีวิตประจำวัน",
        material: "100% Cotton นุ่มสบาย",
        size: "M, L, XL, XXL",
        color: "ดำ, ขาว, เทา",
        feature: "ระบายอากาศดี ทนทาน ซักง่าย",
        image: "https://down-zl-th.img.susercontent.com/sg-11134201-7rcer-lru19ah0fs6m23.webp",
        link: "https://s.shopee.co.th/7V8bSXwYYy"
    },
    {
        title: "(PRE) Dark Matter Hoodie Zip 01",
        price: "฿2,410.00",
        description: "เสื้อฮู้ด Dark Matter พรีเมี่ยมคอลเลคชั่น มีซิป ดีไซน์สุดพิเศษ คุณภาพระดับไฮเอนด์",
        material: "Premium Fabric ผ้าคุณภาพสูง",
        size: "M, L, XL",
        color: "ดำ",
        feature: "ซิปคุณภาพสูง ดีไซน์พรีเมี่ยม Limited Edition",
        image: "https://down-zl-th.img.susercontent.com/th-11134207-7rase-m12jff9grdkp2f.webp",
        link: "https://s.shopee.co.th/6AdDsYgMWQ"
    } 
];

// ฟังก์ชันแสดง Modal
function showModal(index) {
    // 1. เลื่อนหน้าจอขึ้นไปด้านบนสุด (อัตโนมัติ)
    window.scrollTo({
        top: 280,
        behavior: 'smooth' // เลื่อนแบบนุ่มนวล
    });

    const product = products[index];
    const modal = document.getElementById('productModal');

    // 2. ป้องกันการ scroll ของ body เมื่อเปิด modal
    document.body.style.overflow = 'hidden';

    // 3. กรอกข้อมูลเข้า Modal
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalMaterial').textContent = product.material;
    document.getElementById('modalSize').textContent = product.size;
    document.getElementById('modalColor').textContent = product.color;
    document.getElementById('modalFeature').textContent = product.feature;
    document.getElementById('modalImage').src = product.image;

    const buyButton = document.getElementById('modalBuyButton');
    buyButton.onclick = () => window.open(product.link, '_blank');

    // 4. แสดง Modal (เปลี่ยนจาก block เป็น flex เพื่อให้กึ่งกลางหน้าจอที่แก้ใน CSS)
    modal.style.display = 'flex';
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';

    // เปิดการ scroll ของ body อีกครั้ง
    document.body.style.overflow = 'auto';
}

// ปิด Modal เมื่อคลิกนอก Modal Content
window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// ฟังก์ชันค้นหาสินค้า
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchResult = document.getElementById('searchResult');
    const searchText = document.getElementById('searchText');

    if (searchInput === '') {
        searchResult.style.display = 'none';
        return;
    }

    // ค้นหาสินค้าที่ตรงกับคำค้นหา
    const found = products.some(product =>
        product.title.toLowerCase().includes(searchInput)
    );

    if (found) {
        searchText.textContent = `🎉 พบสินค้า "${searchInput}" ในหน้าสินค้าของเรา!`;
        searchResult.style.display = 'block';
    } else {
        searchText.textContent = `😢 ขออภัย ไม่พบสินค้า "${searchInput}" ลองค้นหาคำอื่นดูนะคะ`;
        searchResult.style.display = 'block';
    }

    // ซ่อนผลลัพธ์หลัง 3 วินาที
    setTimeout(() => {
        searchResult.style.display = 'none';
    }, 3000);
}
