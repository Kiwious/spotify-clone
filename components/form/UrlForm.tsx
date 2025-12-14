import { Dispatch, FC, SetStateAction } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input/Input";

interface FormValues {
  url: string;
}

interface Props {
  setUrl: Dispatch<SetStateAction<string>>;
}

const UrlForm: FC<Props> = ({ setUrl }) => {
  const form = useForm({
    defaultValues: {
      url: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    if (values?.url) {
      setUrl(values?.url);
    }
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit((values) => handleSubmit(values))(e);
        }}
      >
        <Input
          className="w-full"
          placeholder="YouTube-URL eingeben..."
          name="url"
        />
      </form>
    </FormProvider>
  );
};

export default UrlForm;
