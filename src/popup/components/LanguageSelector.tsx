import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const LanguageSelector = () => {
	const languageOptions = [
		{ value: "en", label: "English" },
		{ value: "ja", label: "日本語" },
		{ value: "zh-TW", label: "中文 (繁體)" },
		{ value: "zh-HK", label: "中文 (香港)" },
		{ value: "th", label: "ไทย" },
		{ value: "tl", label: "Filipino" },
		{ value: "ms", label: "Bahasa Melayu" },
		{ value: "id", label: "Bahasa Indonesia" },
		{ value: "es", label: "Español" },
	];

	const { i18n } = useTranslation();

	const changeLanguage = (
		selectedOption: {
			value: string;
			label: string;
		} | null,
	) => {
		if (selectedOption === null) return;
		i18n.changeLanguage(selectedOption.value);
		chrome.runtime.sendMessage({
			message: "language",
			language: selectedOption.value,
		});
	};

	return (
		<Select
			styles={{
				control: (baseStyles) => ({
					...baseStyles,
					fontSize: "14px",
					padding: "0 0",
					width: 200,
				}),
				menu: (baseStyles) => ({
					...baseStyles,
					fontSize: "14px",
					zIndex: 9999,
				}),
				menuPortal: (baseStyles) => ({
					...baseStyles,
					zIndex: 9999,
				}),
			}}
			menuPortalTarget={document.body}
			defaultValue={languageOptions.find(
				(option) => option.value === i18n.language,
			)}
			options={languageOptions}
			onChange={changeLanguage}
		/>
	);
};

export default LanguageSelector;