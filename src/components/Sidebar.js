import React, { Component } from 'react';
import DashboardIcon from '../icons/basic_accelerator.svg';
import SettingsIcon from '../icons/basic_gear.svg';
import NotificationIcon from '../icons/music_bell.svg';
import SignoutIcon from '../icons/arrows_move_right.svg';

export const Sidebar = () => (
    <nav className="h-screen flex flex-col justify-between bg-black w-1/6">
        <ul className="list-reset">
            <li className="flex p-4 cursor-pointer bg-grey-darkest">
                <img className="w-6 h-6" src={DashboardIcon} />
                <span className="text-xs text-center text-white self-center ml-4">
                    Dashboard
                </span>
            </li>
            <li className="flex p-4 cursor-pointer">
                <img className="w-6 h-6" src={NotificationIcon} />
                <p className="text-xs text-center text-white self-center ml-4">
                    Notifications
                </p>
                <span className="text-white p-2 mx-2 bg-red rounded-lg text-xs">
                    6
                </span>
            </li>
            <li className="flex p-4 cursor-pointer">
                <img className="w-6 h-6" src={SettingsIcon} />
                <p className="text-xs text-center text-white self-center ml-4">
                    Settings
                </p>
            </li>
        </ul>
        <div className="flex p-4 cursor-pointer">
            <img className="w-4 h-4 mr-4" src={SignoutIcon} />
            <p className="text-white text-xs self-center">Sign out</p>
        </div>
    </nav>
);
