import React, {ReactNode, useEffect, useRef, useState} from 'react';
import styles from "./CalculatorFormItem.module.scss"
import {ICalculatorFormItemHelpItem} from "../../../interfaces/ICalculatorFormSection";
import classNames from "classnames";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {isMobile} from "../../../utils/utils";

const CalculatorFormItem = (props: {
    children: ReactNode,
    label: string,
    help?: ICalculatorFormItemHelpItem[]
}) => {
    const {width} = useWindowDimensions()
    const questionMarkRef = useRef<HTMLDivElement>(null)
    const [questionMarkOffsetLeft, setQuestionMarkOffsetLeft] = useState(0)

    useEffect(() => {
        setQuestionMarkOffsetLeft(questionMarkRef.current?.offsetLeft ?? 0)
    }, [width])

    const popoverStyle = isMobile(width)
        ? {left: -questionMarkOffsetLeft + 24}
        : {}

    const popoverArrowStyle = isMobile(width)
        ? {left: questionMarkOffsetLeft - 34}
        : {}

    const isPopoverRightSide = !isMobile(width)
        ? props.label.length <= 40
        : questionMarkOffsetLeft < width / 2

    const Popover = () => (
        <div
            className={classNames(
                styles.helpPopover,
                isPopoverRightSide ? styles.helpPopoverRight : styles.helpPopoverLeft,
                {[styles.helpPopoverBottom]: isMobile(width)}
            )}
            style={popoverStyle}
        >
            <div
                className={styles.arrowPopover}
                style={popoverArrowStyle}
            />
            {props.help?.map(item =>
                <div className={styles.helpContent}>
                    <span className={styles.helpItemHeader}>{item.header}</span>
                    <span>{item.text}</span>
                </div>
            )}
        </div>
    )

    const Help = () => (
        <span className={styles.nowrap}>
            &nbsp;
            <div
                className={styles.questionMark}
                ref={questionMarkRef}
                tabIndex={0}
            >
                <Popover/>
            </div>
        </span>
    )

    return (
        <div className={styles.formItem}>
            <div className={styles.label}>
                {props.label}
                {props.help &&
                    <Help/>
                }
            </div>
            {props.children}
        </div>
    );
};

export default CalculatorFormItem;
