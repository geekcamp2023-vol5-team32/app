import { Box, Select } from "@chakra-ui/react";

import { useTargetLanguage, useSetTargetLanguage } from "@/store";
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
	const setLanguage = useSetTargetLanguage()
	const getLanguage:string = useTargetLanguage()
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
				value={getLanguage}
				onChange={(event) => setLanguage(event.target.value)}
			>
				{Object.keys(languages).map((key, i) => {
					const language = languages[key];
					return (<option key={i} value={key}>{language.nativeName}</option>);
				})}
			</Select>
		</Box>
	)
}
