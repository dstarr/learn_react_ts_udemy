import AddJournalForm from './components/AddJournalForm';
import Tabs from './components/Tabs';

const App = () => {
    return (
        <>
            <div className="mx-auto flex w-[640px] flex-col py-4">
                <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
                    {/* Header */}
                    <header>
                        <h1 className="mb-4 border-b border-gray-300 pb-3 text-2xl font-bold">
                            Journal App
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quos.
                        </p>
                    </header>

                    {/* Tabs */}
                    <Tabs />

                    {/* Add entry */}
                    <AddJournalForm />
                </div>
            </div>
        </>
    );
};

export default App;
