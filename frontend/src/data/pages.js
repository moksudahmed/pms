
import OverviewImg from "../assets/img/houses/home10.jpg";
import TransactionsImg from "../assets/img/houses/home1.jpg";
import SettingsImg from "../assets/img/houses/home2.jpg";
import SignInImg from "../assets/img/houses/home3.jpg";
import SignUpImg from "../assets/img/houses/home4.jpg";
import LockImg from "../assets/img/houses/home5.jpg";
import ForgotPasswordImg from "../assets/img/houses/home6.jpg";
import ResetPasswordImg from "../assets/img/houses/home7.jpg";
import NotFoundImg from "../assets/img/houses/home8.jpg";
import ServerErrorImg from "../assets/img/houses/home9.jpg";

import { Routes } from "../routes";


export default [
    {
        "id": 1,
        "name": "Home",
        "image": OverviewImg,
        "link": Routes.DashboardOverview.path
    },
    {
        "id": 2,
        "name": "Home",
        "image": TransactionsImg,
        "link": Routes.Transactions.path
    },
    {
        "id": 3,
        "name": "Home",
        "image": SettingsImg,
        "link": Routes.Settings.path
    },
    {
        "id": 4,
        "name": "Home",
        "image": SignInImg,
        "link": Routes.Signin
    },
    {
        "id": 5,
        "name": "Home",
        "image": SignUpImg,
        "link": Routes.Signup.path
    },
    {
        "id": 6,
        "name": "Home",
        "image": LockImg,
        "link": Routes.Lock.path
    },
    {
        "id": 7,
        "name": "Home",
        "image": ForgotPasswordImg,
        "link": Routes.ForgotPassword.path
    },
    {
        "id": 8,
        "name": "Home",
        "image": ResetPasswordImg,
        "link": Routes.ResetPassword.path
    },
    {
        "id": 9,
        "name": "Home",
        "image": NotFoundImg,
        "link": Routes.NotFound.path
    },
    {
        "id": 10,
        "name": "Home",
        "image": ServerErrorImg,
        "link": Routes.ServerError.path
    }
];