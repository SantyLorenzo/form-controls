import cn from "classnames";
import * as Select from "@radix-ui/react-select";
import styles from "./Input.module.css";

const Selectt = () => (
  <Select.Root>
    <Select.Trigger>
      <Select.Value placeholder="Select an option" />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Item value="option 1">
            <Select.ItemText>option 1</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>

          <Select.Group>
            <Select.Label />
            <Select.Item value="option 2">
              <Select.ItemText>option 2</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default Selectt;
