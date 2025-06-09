import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "cr-browser-helper" is now active!');
	
	const disposable = vscode.commands.registerCommand('cr-browser-helper.findAllGNFiles', async () => {
		const files = await vscode.workspace.findFiles('**/*.gn', '');

		if (files.length === 0) {
			vscode.window.showInformationMessage('No GN files found.');
      return;
		}

		const output = vscode.window.createOutputChannel('GN File Finder');
    output.clear();
    output.show();

		output.appendLine(`Found ${files.length} GN files:\n`);
    files.forEach(file => output.appendLine(file.fsPath));
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
