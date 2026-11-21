<?php

// class Kendaraan
// {
//     private $merk = "";
//     private $model = "";
//     private $warna = "";
//     private $roda = 0;

//     function Klakson()
//     {
//         echo "Honk!";
//     }

//     function Setmerk($brand)
//     {
//         $this->merk = $brand;
//     }

//     function Setmodel($series)
//     {
//         $this->model = $series;
//     }

//     function Setwarna($colors)
//     {
//         $this->warna = $colors;
//     }

//     function Setroda($tire)
//     {
//         $this->roda = $tire;
//     }

//     function Getmerk()
//     {
//         return $this->merk;
//     }

//     function Getmodel()
//     {
//         return $this->model;
//     }

//     function Getwarna()
//     {
//         return $this->warna;
//     }

//     function Getroda()
//     {
//         return $this->roda;
//     }

//     function SetALLData($brand, $series, $colors, $tire)
//     {
//         $this->merk = $brand;
//         $this->model = $series;
//         $this->warna = $colors;
//         $this->roda = $tire;
//     }

//     // function GetALLData()
//     // {
//     //     $brand = $this->merk;
//     //     $series = $this->model;
//     //     $colors = $this->warna;
//     //     $tire = $this->roda;

//     //     echo
//     // }

//     // <tag_pembuka>
//     // function __construct()
//     // {
//     //     echo "<h3>Data sebuah kendaraan:</h3>";
//     // }

//     // </tag_penutup>
//     // function __destruct()
//     // {
//     //     echo "<h5>Contact . About . Home </h5>";
//     // }
// }

// class Motor extends Kendaraan
// {
//     function StandarOn()
//     {
//         echo "On";
//     }

//     function StandarOff()
//     {
//         echo "Off";
//     }
// }

// $mobil = new Kendaraan();

// $mobil->Setmerk("Bugatti");
// $mobil->Setmodel("Mistral");
// $mobil->Setwarna("Black");
// $mobil->Setroda(4);

// echo "Merk  : " . $mobil->Getmerk() . "<br>";
// echo "Model : " . $mobil->Getmodel() . "<br>";
// echo "Warna : " . $mobil->Getwarna() . "<br>";
// echo "Roda  : " . $mobil->Getroda() . "<br><br>";

// $mobil->Klakson();

// $motor = new Motor();

// $motor->Setmerk("Yamaha");
// $motor->Setmodel("Vixion");
// $motor->Setwarna("Putih");
// $motor->Setroda(2);

// echo "<br><br>Merk  : " . $motor->Getmerk() . "<br>";
// echo "Model : " . $motor->Getmodel() . "<br>";
// echo "Warna : " . $motor->Getwarna() . "<br>";
// echo "Roda  : " . $motor->Getroda() . "<br><br>";

// $motor->StandarOn();

// $kapal = new Kendaraan();

// $kapal->SetALLData("Kapal Lawd", "Azur", "Putih Hitam", 0);

class Segitiga
{
    private $tinggi;
    private $alas;
    private $sisi;

    function SetTinggi($t)
    {
        $this->tinggi = $t;
    }

    function SetAlas($a)
    {
        $this->alas = $a;
    }

    function SetSisi($s)
    {
        $this->sisi = $s;
    }

    function GetTinggi()
    {
        return $this->tinggi;
    }

    function GetAlas()
    {
        return $this->alas;
    }

    function GetSisi()
    {
        return $this->sisi;
    }

    function Tampil()
    {
        echo "Tinggi : " . $this->GetTinggi() . "<br>";
        echo "Alas   : " . $this->GetAlas() . "<br>";
        echo "Sisi   : " . $this->GetSisi() . "<br>";
    }
}

class SamaKaki extends Segitiga
{
    function Luas()
    {
        $luas = 0.5 * $this->GetAlas() * $this->GetTinggi();
        echo "Luas segitiga sama kaki = " . $luas . "<br>";
    }

    function Keliling()
    {
        $keliling = (2 * $this->GetSisi()) + $this->GetAlas();
        echo "Keliling segitiga sama kaki = " . $keliling . "<br>";
    }
}

class SikuSiku extends Segitiga
{
    function Luas()
    {
        $luas = 0.5 * $this->GetAlas() * $this->GetTinggi();
        echo "Luas segitiga siku-siku = " . $luas . "<br>";
    }

    function Keliling()
    {
        $keliling = $this->GetAlas() + $this->GetTinggi() + $this->GetSisi();
        echo "Keliling segitiga siku-siku = " . $keliling . "<br>";
    }
}

class SamaSisi extends Segitiga
{
    function Luas()
    {
        $luas = 0.5 * $this->GetAlas() * $this->GetTinggi();
        echo "Luas segitiga sama sisi = " . $luas . "<br>";
    }

    function Keliling()
    {
        $keliling = 3 * $this->GetSisi();
        echo "Keliling segitiga sama sisi = " . $keliling;
    }
}

echo "<h3>Segitiga Sama Kaki</h3>";
$sk = new SamaKaki();
$sk->SetTinggi(4);
$sk->SetAlas(6);
$sk->SetSisi(5);
$sk->Tampil();
$sk->Luas();
$sk->Keliling();

echo "<br><h3>Segitiga Siku-siku</h3>";
$siku = new SikuSiku();
$siku->SetTinggi(8);
$siku->SetAlas(5);
$siku->SetSisi(3);
$siku->Tampil();
$siku->Luas();
$siku->Keliling();

echo "<br><h3>Segitiga Sama Sisi</h3>";
$sisi = new SamaSisi();
$sisi->SetTinggi(10);
$sisi->SetAlas(7);
$sisi->SetSisi(4);
$sisi->Tampil();
$sisi->Luas();
$sisi->Keliling();
