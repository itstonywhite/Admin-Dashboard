function AddProductsFields({ newProduct, onChange }) {
  const fields = [
    {
      label: "عنوان محصول",
      key: "title",
      type: "text",
    },
    {
      label: "وضعیت انتشار",
      key: "isPublished",
      type: "select",
    },
    {
      label: "تعداد موجودی",
      key: "entity",
      type: "number",
    },
    {
      label: "تصویر محصول",
      key: "img",
      type: "text",
    },
    {
      label: "قیمت محصول",
      key: "price",
      type: "number",
    },
    {
      label: "توضیحات محصول",
      key: "description",
      type: "textarea",
    },
  ];

  const handleChange = (key, value) => {
    const product = {
      ...newProduct,
      id: crypto.randomUUID(),
      [key]: key === "price" ? Number(value) : value,
    };

    onChange(product);
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-sm select-none text-neutral-700">
            {" "}
            {field.label}:{" "}
          </label>
          {field.type === "textarea" ? (
            <textarea
              value={newProduct[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="block mt-1 mb-2 text-sm min-h-20 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm border outline-none primary-border-color w-full"
            />
          ) : field.type === "select" ? (
            <select
              className="block mt-1 mb-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
              value={String(newProduct.isPublished)}
              onChange={(e) =>
                handleChange("isPublished", e.target.value === "true")
              }
            >
              <option value="true">منتشر شده</option>
              <option value="false">منتشر نشده</option>
            </select>
          ) : (
            <input
              type={field.type}
              onChange={(e) => handleChange(field.key, e.target.value)}
              value={newProduct[field.key]}
              className="block mt-1 mb-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AddProductsFields;
