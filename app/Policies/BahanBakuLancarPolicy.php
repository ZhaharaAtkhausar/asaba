<?php

namespace App\Policies;

use App\Models\BahanBakuLancar;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BahanBakuLancarPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, BahanBakuLancar $bahanBakuLancar)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, BahanBakuLancar $bahanBakuLancar)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, BahanBakuLancar $bahanBakuLancar)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, BahanBakuLancar $bahanBakuLancar)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, BahanBakuLancar $bahanBakuLancar)
    {
        //
    }
}
