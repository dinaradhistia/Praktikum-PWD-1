<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Praktikum Pertemuan 6</title>
</head>

<body>
    <!-- Nomor 1 -->
    <h3>1. Bilangan Genap (1 - 10)</h3>
    <p>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            if ($i % 2 == 0) {
                echo $i . " ";
            }
        }
        ?>
    </p>

    <!-- Nomor 2 -->
    <h3>2. Tabel Perkalian Matriks</h3>
    <table border="1" cellpadding="6" cellspacing="2">
        <tr>
            <th>Bilangan</th>
            <?php
            for ($kolom = 1; $kolom <= 10; $kolom++) {
                echo "<th>$kolom</th>";
            }
            ?>
        </tr>
        <?php
        for ($baris = 1; $baris <= 10; $baris++) {
            echo "<tr>";
            echo "<th>$baris</th>";

            for ($kolom = 1; $kolom <= 10; $kolom++) {
                $hasil = $baris * $kolom;
                echo "<td align='center'>$hasil</td>";
            }
            echo "</tr>";
        }
        ?>
    </table>
</body>

</html>