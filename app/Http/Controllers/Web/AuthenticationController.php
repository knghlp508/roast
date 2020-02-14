<?php

namespace App\Http\Controllers\Web;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class AuthenticationController extends Controller
{

    /**
     * 登录页面
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getLogin()
    {
        return view('login');
    }

    /**
     * 登录认证
     * @param $account
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function getSocialRedirect($account)
    {
        try {
            return Socialite::with($account)->redirect();
        } catch (\InvalidArgumentException $e) {
            return redirect('login');
        }
    }

    /**
     * 登录认证回调
     * @param $account
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function getSocialCallback($account)
    {
        //从第三方 OAuth 回调中获取用户信息
        $socialUser = Socialite::with($account)->user();
        //在本地 users 表中查询该用户来判断是否已存在
        $user = User::where('provider_id', $socialUser->id)->where('provider', $account)->first();
        //如果该用户不存在则将其保存到 users 表
        if ($user == null) {
            $newUser = new User();

            $newUser->name = $socialUser->getName();
            $newUser->email = $socialUser->getEmail() == '' ? '' : $socialUser->getEmail();
            $newUser->avatar = $socialUser->getAvatar();
            $newUser->password = '';
            $newUser->provider = $account;
            $newUser->provider_id = $socialUser->getId();

            $newUser->save();
            $user = $newUser;
        }

        //手动登录该用户
        \Auth::login($user);

        //登录成功后将用户重定向到首页
        return redirect('/');
    }

}
