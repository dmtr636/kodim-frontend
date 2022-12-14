import React, {lazy, Suspense, useEffect} from "react"
import CalculatorLayout from "../components/calculator/CalculatorLayout/CalculatorLayout";
import CalculatorForm from "../components/calculator/CalculatorForm/CalculatorForm";
import CalculatorCard from "../components/calculator/CalculatorCard/CalculatorCard";
import {calculatorFormFirstStep, calculatorFormSecondStep} from "../constants/calculatorForm";
import {useLocation, useSearchParams} from "react-router-dom";
import CalculatorContactForm from "../components/calculator/CalculatorContactForm/CalculatorContactForm";
import {calculatorStore} from "../stores/calculatorStore";
import {observer} from "mobx-react-lite";
import CalculatorPrice from "../components/calculator/CalculatorPrice/CalculatorPrice";
import CalculatorSubmitResult from "../components/calculator/CalculatorSubmitResult/CalculatorSubmitResult";
import useWindowDimensions from "../hooks/useWindowDimensions";
import {isMobile} from "../utils/utils";

const CalculatorPriceMobile = lazy(() => import("../components/calculator/CalculatorPriceMobile/CalculatorPriceMobile"))

const getCalculatorFormData = (stepNumber: string) => {
    switch (stepNumber) {
        case "1":
            return calculatorFormFirstStep
        case "2":
            return calculatorFormSecondStep
        default:
            return calculatorFormFirstStep
    }
}

export const CalculatorPage = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation()
    const {width} = useWindowDimensions()
    const store = calculatorStore
    const currentStep = searchParams.get("step") ?? "1"

    const onChange = (fieldName: string, value: any) => {
        store.setFormValues({
            ...store.formValues,
            [fieldName]: value
        })
    }

    const updateSearchParams = (step: string, replace?: boolean) => {
        if (step === "1") {
            setSearchParams("", {replace})
        } else {
            setSearchParams(`step=${step}`, {replace})
        }
    }

    useEffect(() => {
        if (store.currentStep === "success" || store.currentStep === "error") {
            updateSearchParams("1", true)
        } else {
            updateSearchParams(store.currentStep, true)
        }
    }, [])

    useEffect(() => {
        if (location.pathname === "/calculator") {
            store.setCurrentStep(currentStep)
        }
    }, [searchParams])

    const onNext = () => {
        updateSearchParams((Number(currentStep) + 1).toString())
    }

    const onBack = () => {
        updateSearchParams((Number(currentStep) - 1).toString())
    }

    const onSubmit = (status: string) => {
        updateSearchParams(status)
    }

    const getFirstColumn = () => {
        switch (currentStep) {
            case "3":
                return (
                    <CalculatorContactForm
                        formValues={store.formValues}
                        onChange={onChange}
                        onBack={onBack}
                        onSubmit={onSubmit}
                    />
                )
            case "success":
                return (
                    <CalculatorSubmitResult success={true}/>
                )
            case "error":
                return (
                    <CalculatorSubmitResult success={false}/>
                )
            default:
                return (
                    <CalculatorForm
                        formValues={store.formValues}
                        onChange={onChange}
                        formData={getCalculatorFormData(currentStep)}
                        onNext={onNext}
                        onBack={currentStep !== "1" ? onBack : undefined}
                    />
                )
        }
    }

    return (
        <CalculatorLayout>
            {getFirstColumn()}
            {!isMobile(width)
                ?
                <CalculatorCard sticky>
                    <CalculatorPrice/>
                </CalculatorCard>
                :
                <Suspense>
                    <CalculatorPriceMobile/>
                </Suspense>
            }
        </CalculatorLayout>
    )
})