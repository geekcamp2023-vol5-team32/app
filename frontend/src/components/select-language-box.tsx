import { Box, Select } from "@chakra-ui/react";

import languagesData  from '@/lib/iso_639-1.json';

interface Language {
	"639-1": string;
	"639-2": string;
	family: string;
	name: string;
	nativeName: string;
	wikiUrl: string;
}

const languages: Record<string, Language> = languagesData;

export const SelectBox = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
	  >
			<Select
				width="80%"
				size='lg'
				bg='white'
			>
				{Object.keys(languages).map((key) => {
					const language = languages[key];
					if (key === "ja") {
						return (<option value={key} selected>{language.nativeName}</option>);
					} else {
						return (<option value={key}>{language.nativeName}</option>);
					}
				})}
			</Select>
		</Box>
	)
}
