# Getting Started with Redux Toolkit


1-Uygulamanızın tüm genel durumu, tek bir mağazanın içindeki bir nesne ağacında depolanır.
2-Durum ağacını değiştirmenin tek yolu, bir eylem(fonksiyon) , ne olduğunu açıklayan bir nesne oluşturmak ve onu mağazaya göndermektir. 

## 3-Redux Toolkit ayrıca, "RTK Sorgusu" adını verdiğimiz güçlü bir veri alma ve önbelleğe alma özelliği içerir .

4- createSlice içinde barındırılan fonksiyonların tamamının yer aldığı kısımdır.
5- Action'lar state içerisinde bulunan fonksiyonlardır.
6- Reducer store içindeki stateleri değiştirir. Store ise statelerin kaydedildiği büyük bir objedir.

## 7- Provider ile uygulamamızı sararız ve uygulama etrafına React-Redux ekleriz.

8-configureStore(): basitleştirilmiş yapılandırma seçenekleri ve iyi varsayılanlar sağlamak için createStore'u sarar. Dilim redüktörlerinizi otomatik olarak birleştirebilir, sağladığınız Redux ara katman yazılımını ekler.

9- 