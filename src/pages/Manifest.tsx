import ExternalLinkBlock from "../components/ExternalLinkBlock";
import ExternalLinkButton from "../components/ExternalLinkButton";

export default function Manifest() {
    return (
        <div >
            <ExternalLinkBlock>

                <ExternalLinkButton
                    url="https://github.com/takahiroanno2024/election2024/blob/main/docs/contribution.md"
                    text="本家様 : マニフェスト" />

            </ExternalLinkBlock>
            <div className="border border-collapse rounded-8">
                <iframe
                    src="https://manifest.takahiroanno.com/"
                    width="100%"
                    height="1000px"
                    style={{ border: 'none' }}
                    title="Manifest"
                    loading="lazy"
                />
            </div>
        </div>
    )
}