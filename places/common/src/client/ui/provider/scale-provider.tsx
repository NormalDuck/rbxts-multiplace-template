import { PropsWithChildren } from "@rbxts/react";
import React from "@rbxts/react";
import { useScaler } from "@rbxts/ui-scaler";
import { ScalerContext } from "common/client/ui/context/scaler-context";
import { BASE_RESOLUTION } from "common/shared/constants/resolution";

export function ScaleProvider({ children }: PropsWithChildren) {
	return <ScalerContext.Provider value={useScaler(BASE_RESOLUTION)}>{children}</ScalerContext.Provider>;
}