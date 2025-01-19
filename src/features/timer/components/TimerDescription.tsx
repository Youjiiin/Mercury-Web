import { Text } from "@repo/design-system/Text";
import { getTimerDescription } from "../lib/getTimerDescription";
import { useTimerStore } from "../model/TimerProvider";

export const TimerDescription = () => {
  const status = useTimerStore((state) => state.status);
  return (
    <Text variant={"body/18_m"} className=" text-gray-1000 whitespace-pre-wrap">
      {getTimerDescription(status)}
    </Text>
  );
};
