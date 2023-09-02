import { Box, Select } from "@chakra-ui/react";

import { useTargetLanguage, useSetTargetLanguage } from "@/store";
import languagesData  from '@/lib/iso_639-1_ja.json';

interface Language {
	"639-1": string;
	"639-2": string;
	family: string;
	name: string;
	nativeName: string;
	wikiUrl: string;
	japanese_name: string;
}

const languages: Record<string, Language> = languagesData;

export const SelectBox = () => {
	const setLanguage = useSetTargetLanguage()
	const getLanguage:string = useTargetLanguage()
	// console.log(getLanguage)
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
					return (<option key={i} value={key}>{language.nativeName}{'\u0009'}{language.japanese_name}</option>);
				})}
			</Select>
		</Box>
	)
}
