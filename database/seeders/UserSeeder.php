<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuarios = [
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'rol' => true,
                'password' => 'latigazo33',
                'id_sede' => 5 ,
                'imagen' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CQxdTYvVk0IxK9JjTg3YaEPXKfuPfCK3mg&s"
            ],

        ];

        foreach ($usuarios as $usuario) {
            User::create($usuario);
        }
    }
}
