import * as React from 'react'

import { SwitchProps } from "./Switch"
import { RadioProps, RadioGroupProps } from "./Radio"
import { CheckProps, CheckGroupProps } from "./Check"
import { PopupProps } from "./Popup"
import { InputProps } from "./Input"

declare module 'react-handless-ui' {

    class Switch extends React.Component<SwitchProps, any> { }

    class Radio extends React.Component<RadioProps, any> { }
    class RadioGroup extends React.Component<RadioGroupProps, any> { }

    class Check extends React.Component<CheckProps, any> { }
    class CheckGroup extends React.Component<CheckGroupProps, any> { }

    class Popup extends React.Component<PopupProps, any> { }

    class Input extends React.Component<InputProps, any> { }
}