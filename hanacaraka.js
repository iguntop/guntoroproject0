var nama_input = document.getElementById("form_nama");
nama_input.addEventListener("submit",hitungRamalanHanacaraka);
function hitungRamalanHanacaraka(){

    let hasil1=cariHasil(document.getElementById("nama").value);
    let hasil2=ramalanAkhir(hasil1);
    //alert(hasil2);
    //console.log(hasil2);
    event.preventDefault();
    if (document.getElementById("nama").value.toUpperCase() + hasil2 =="undefined"){
        alert("MASUKAN NAMA ANDA!!!");
        return document.getElementById("Hasil").innerHTML="ANDA BELUM MEMASUKAN NAMA";   
    }else{

        return document.getElementById("Hasil").innerHTML=document.getElementById("nama").value.toUpperCase() + hasil2;   
    }
    
};


function cariHasil(namaOrang){
    let kamusHanacaraka={1:['A','I', 'U', 'E', 'O', 'HA', 'HI', 'HU', 'HE', 'HO'],
                            2:['NA', 'NI', 'NU', 'NE', 'NO'],
                            3:['TJA', 'TJI', 'TJU', 'TJE', 'TJO', 'CA', 'CI', 'CU', 'CE', 'CO'],
                            4:['RA', 'RI', 'RU', 'RE', 'RO'],
                            5:['KA', 'KI', 'KU', 'KE', 'KO'],
                            6:['DA', 'DI', 'DU', 'DE', 'DO'],
                            7:['TA', 'TI', 'TU', 'TE', 'TO'],
                            8:['SA', 'SI', 'SU', 'SE', 'SO', 'ZA', 'ZI', 'ZU', 'ZE', 'ZO'],
                            9:['WA', 'WI', 'WU', 'WE', 'WO'],
                            10:['LA', 'LI', 'LU', 'LE', 'LO'],
                            11:['PA', 'PI', 'PU', 'PE', 'PO','FA', 'FI', 'FU', 'FE', 'FO','VA', 'VI', 'VU', 'VE', 'VO'],
                            13:['DJA', 'DJI', 'DJU', 'DJE', 'DJO'],
                            14:['YA', 'YI', 'YU', 'YE', 'YO','NYA', 'NYI', 'NYU', 'NYE', 'NYO'],
                            16:['MA', 'MI', 'MU', 'ME', 'MO'],
                            17:['GA', 'GI', 'GU', 'GE', 'GO'],
                            18:['BA', 'BI', 'BU', 'BE', 'BO'],
                            20:['NGA', 'NGI', 'NGU', 'NGE', 'NGO']
                        }
    let kumpul =[];
    let bacaHuruf='';
    for( let i =0;i<namaOrang.length;i++){
        bacaHuruf+=namaOrang[i];    
            for(j in kamusHanacaraka){
                for(k in kamusHanacaraka[j]){
                    if(bacaHuruf.toUpperCase()==kamusHanacaraka[j][k] && bacaHuruf.length < 4){
                        kumpul.push([bacaHuruf, j]);
                        bacaHuruf='';
                        break;
                    }           
                    
                }
            }
            //Jika baca huruf tidak ter-reset setelah length nya lebih dari 3 maka index i mulai dari index i kurang 2
        if(bacaHuruf.length==3){
            i=i-2;
            bacaHuruf='';

        }

    }
    //console.log(kumpul);
    //return ramalanAkhir(kumpul);
     return kumpul;

    
     
}


function ramalanAkhir(arr){
    let ramal ={1: 'Serie (pas-pasan, sedang, atau 75%)',
                2: 'Runggu Rejeki (bagus) Peringkat 3',
                3: 'Dunia (happy, senang, tidak pusing) Peringkat 4',
                4: 'Rara (miskin, susah, penyakitan)',
                5: 'Patih (celaka, nasibnya jelek)',
                6: 'Serie (pas-pasan/ biasa2 aja)',
                7: 'Runggu Rejeki (rejeki bagus) Peringkat 2',
                8: 'Dunia Senang (paling bagus, paling hokie, nga bisa susah) Peringkat  1',
                9: 'Banyak capek hati (kalo di sifat manusia: banyak mulut, bawel, iri)',
                10: 'Bolong, abis (kalo di sifat manusia: boros, royal ke uang, royal ke pribadi, sering juga pelit untk pribadi tp royal untuk tmn2, tangan panjang, sbg suami/ istri tidak setia)'
                }
let jml=0;
let total=0;
    for (i=0;i<arr.length;i++){
        jml+=arr[i][1]*1;
    }
total=jml;
if ( jml > 10){
    while ( jml > 10){
        jml=jml-10;
       
    }
    
}
 let res=`: HURUF HANACARAKA ANDA TERDIRI DARI : <br>`;   
if( jml in ramal){
    for(i in arr){
        res+=`${arr[i][0].toUpperCase()} dengan nilai ${arr[i][1]} <br>`
    }
    res+=`Jumlah total hanacaraka : ${total} <br><br><br> HASIL RAMALAN HANACARAKA ANDA ADALAH : <br> <br>${jml} .${ramal[jml]}` 
    return res;
}
    
}



//console.log(cariHasil('guntoro'));
